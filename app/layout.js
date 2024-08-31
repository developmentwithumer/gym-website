import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Achieve Your Fitness Goals at our gym | Top-Rated Gym in Lahore",
  description: "Join our gym in Lahore for personalized fitness plans, state-of-the-art equipment, and a supportive community. Whether you're a beginner or an athlete, our expert trainers will help you reach your fitness goals. Start your journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-background text-white font-poppins">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
