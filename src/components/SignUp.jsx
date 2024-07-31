"use client"

import React, { useState } from 'react';
import authService from '../appwrite/authService';
import manageCartService from '@/appwrite/manageCartService';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { login } from '@/Redux/slices/authSlice';
import { useForm } from 'react-hook-form';
import { Logo, Btn, Input } from "./index";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function SignUp() {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSignUp = async (data) => {
        setError("");
        try {
            const { name, email, password } = data;
            console.log(data.avatar)
            data.avatar=""
            if (data.avatar.length > 0) {
                const res = await manageCartService.uploadFile(data.avatar[0]);
                console.log(res)
                if (res) {
                    data.avatar = res.$id;
                } else {
                    throw new Error('Failed to upload avatar');
                }
            }
            else{
                data.avatar="";
            }
            const newAccount = await authService.createAccount({ email, password, name, avatar : data.avatar});
            if (newAccount) {
                const loginSession = await authService.createSession({ email, password });
                if (loginSession) {
                    const userData = await authService.getCurrentUser();
                    if (userData) {
                        dispatch(login(userData));
                        router.push("/");
                    }
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };
    

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-xl p-10 pt-0 shadow-md">
                <div className="mb-6 flex justify-center">
                    <Logo className="w-24 h-24" />
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Create a new account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?&nbsp;
                    <Link href="/signin" className="font-medium text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit(onSignUp)} className="mt-8 space-y-6">
                    <div>
                        <Input
                            type="text"
                            placeholder="Enter Your Name"
                            label="Name"
                            {...register("name", {
                                required: { value: true, message: "This field is required" },
                            })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <Input
                            type="email"
                            placeholder="Enter Your Email"
                            label="Email"
                            {...register("email", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 6, message: "Email must be at least 6 characters" },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="relative">
                        <Input
                            type={show ? "text" : "password"}
                            placeholder="Enter Your Password"
                            label="Password"
                            {...register("password", {
                                required: { value: true, message: "This field is required" },
                                minLength: { value: 4, message: "Password must be at least 4 characters" },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                        >
                            {show ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <div>
                        <Input
                        label="Avatar (optional)"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("avatar", { required: false })}
                    />
                    </div>
                    <div>
                        <Btn type="submit" disabled={isSubmitting} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                            Sign Up
                        </Btn>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
