import SignInForm from "./components/SignInForm";
import WelcomeSection from "./components/WelcomeSection";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex  flex-col justify-center items-center bg-white text-gray-700">
      <div className="flex w-full max-w-4xl bg-white  rounded-lg overflow-hidden">
        {/* Left: Sign-Up Form */}
        <div className="w-1/2 p-8">
          <SignInForm />
        </div>
        {/* Right: Welcome Section */}
        <div className="w-1/2 bg-white flex justify-center items-center p-8">
          <WelcomeSection />
        </div>
      </div>
    </div>
  );
}
