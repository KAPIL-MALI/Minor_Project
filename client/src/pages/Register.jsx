import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User as UserIcon, AlertCircle, ArrowRight } from 'lucide-react';

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Register = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      await registerUser(data.name, data.email, data.password);
      navigate('/problems');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]"></div>

      <div className="max-w-md w-full space-y-8 glass-panel p-8 sm:p-10 rounded-3xl z-10 animate-fade-in">
        <div>
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Create an Account
          </h2>
          <p className="mt-2 text-center text-sm text-base-content/70">
            Already have an account? <Link to="/login" className="font-medium text-primary hover:text-primary-focus transition-colors">Sign in here</Link>
          </p>
        </div>

        {error && (
          <div className="alert alert-error text-sm rounded-xl py-3">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <UserIcon size={18} />
                </div>
                <input
                  {...register('name')}
                  type="text"
                  className={`input input-bordered w-full pl-10 bg-base-200/50 focus:bg-base-100 transition-colors ${errors.name ? 'input-error' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <span className="text-error text-xs mt-1 ml-1">{errors.name.message}</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email address</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Mail size={18} />
                </div>
                <input
                  {...register('email')}
                  type="email"
                  className={`input input-bordered w-full pl-10 bg-base-200/50 focus:bg-base-100 transition-colors ${errors.email ? 'input-error' : ''}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <span className="text-error text-xs mt-1 ml-1">{errors.email.message}</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Lock size={18} />
                </div>
                <input
                  {...register('password')}
                  type="password"
                  className={`input input-bordered w-full pl-10 bg-base-200/50 focus:bg-base-100 transition-colors ${errors.password ? 'input-error' : ''}`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <span className="text-error text-xs mt-1 ml-1">{errors.password.message}</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Lock size={18} />
                </div>
                <input
                  {...register('confirmPassword')}
                  type="password"
                  className={`input input-bordered w-full pl-10 bg-base-200/50 focus:bg-base-100 transition-colors ${errors.confirmPassword ? 'input-error' : ''}`}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && <span className="text-error text-xs mt-1 ml-1">{errors.confirmPassword.message}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full rounded-xl shadow-lg shadow-primary/20"
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>Create Account <ArrowRight size={18} className="ml-1" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
