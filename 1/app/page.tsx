// app/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, redirect } from 'next/navigation';
import { Button } from "@/components/ui/button";

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 bg-orange-100 flex items-center justify-center">
    <div className="text-center">
      <Image src="/logo.svg" alt="SkinLytics Logo" width={100} height={100} className="mx-auto animate-pulse" />
      <p className="mt-4 text-lg font-semibold text-orange-800">Loading...</p>
    </div>
  </div>
);

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' || session !== null) {
      console.log('User is already authenticated, redirecting to dashboard...');
      setIsLoading(true);
      redirect('/dashboard');
    }

  }, [status, router]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleSignIn = async (provider: 'github' | 'google') => {
    setIsLoading(true);
    await signIn(provider);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden md:flex md:w-1/2 bg-orange-100 relative m-8 rounded-3xl">
        <div className='absolute top-0 left-0 m-20 rounded-3xl w-5/6 h-5/6 bg-orange-100 bg-opacity-50'></div>

        <div className="relative w-full h-full flex items-center justify-center" >
      <div className="relative w-full h-full flex items-center justify-center">


      </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Image src="/logo.svg" alt="Skinvincible Logo" width={80} height={80} className="mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Welcome to Skinlytics</h1>
            <p className="text-gray-600 mt-2">Your personal AI-powered skin care assistant</p>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => handleSignIn('github')}
            >
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className='mr-2'>
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>
              Sign up with Github
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => handleSignIn('google')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="mr-2">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign up with Google
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">
            By registering you agree to our Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;