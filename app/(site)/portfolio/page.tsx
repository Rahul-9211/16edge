import { Metadata } from "next";
import PortfolioContent from "./portfolio-content";

export const metadata: Metadata = {
  title: "Our Work | 16edge",
  description: "Real Results. Real Impact. See how we've helped brands scale, grow, and win with our data-driven marketing strategies.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
