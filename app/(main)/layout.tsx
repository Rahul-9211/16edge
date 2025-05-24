import { MainNav } from "@/components/layout/main-nav";
import { GradientWrapper } from "@/components/layout/gradient-wrapper";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GradientWrapper>
        <MainNav />
        <main>
          {children}
        </main>
      </GradientWrapper>
      <Footer />
    </>
  );
} 