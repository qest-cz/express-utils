import { expect } from 'chai';
import * as httpCodes from 'http-codes';
import * as sinon from 'sinon';
import { errorHandler } from '.';

import { TestLogger } from '@qest/logger-utils';
import { notFoundHandler } from '../not-found-handler';

describe('Errors handlers - unit tests', () => {
    let nextSpy;
    let sandbox;
    let res;
    const logger = new TestLogger();

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        nextSpy = sinon.spy();

        res = {
            send(response) {
                this.response = response;
            },
            json(object) {
                this.response = object;
                return res;
            },
            status(status) {
                this.stat = status;
                return res;
            },
        };
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should throw 404 because statusCodes is NOT_FOUND', async () => {
        const req: any = {};
        res.statusCode = httpCodes.NOT_FOUND;

        await notFoundHandler(req, res, nextSpy);
        expect(nextSpy.callCount).to.be.eq(1);
        expect(nextSpy.firstCall.lastArg).to.have.property('code', 404);
    });

    it('should throw 500 because unexpected error was thrown.', async () => {
        const loggerErrorSpy = sandbox.stub(res, 'status');
        const req: any = {};
        const err: any = new Error('some error');

        await errorHandler(logger)(err, req, res, nextSpy);
        expect(nextSpy.callCount).to.be.eq(1);
        expect(loggerErrorSpy.callCount).to.be.eq(1);
        expect(loggerErrorSpy.firstCall.lastArg).to.equal(500);
    });
});
