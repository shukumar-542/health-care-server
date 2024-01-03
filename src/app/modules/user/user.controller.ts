import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserServices } from './user.services';


const createDoctor = catchAsync(async (req: Request, res: Response) => {
    const { doctor, ...userData } = req.body;
    const result = await UserServices.createDoctor(doctor, userData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctor created successfully!',
        data: result
    });
});

const changeProfileStatus = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserServices.changeProfileStatus(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User status updated successfully!',
        data: result
    });
})


export const UserController = {
    createDoctor,
    changeProfileStatus
};