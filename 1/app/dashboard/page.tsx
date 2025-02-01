'use client'
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import Image from 'next/image';

export interface ExtendedUser extends Omit<User, 'name' | 'email'> {
  id: string;
  name?: string | null;
  email?: string | null;
  age?: number | null;
  gender?: string | null;
  image?: string | null;
}

import { User } from 'next-auth';
import Dashboard from "@/components/Dashboard";

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 bg-orange-100 flex items-center justify-center">
    <div className="text-center">
      <Image src="/logo.svg" alt="Skinvincible Logo" width={100} height={100} className="mx-auto animate-pulse" />
      <p className="mt-4 text-lg font-semibold text-orange-800">Loading...</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  if (status === "loading") {
    return <LoadingScreen />;
  }

  return (
    <>

      <Dashboard />
    </>
  );
}