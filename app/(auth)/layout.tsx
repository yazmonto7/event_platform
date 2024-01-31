import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-300 flex flex-center min-h-screen  bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
}
