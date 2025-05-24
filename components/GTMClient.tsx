"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    gtmDidInit?: boolean;
  }
}

export function GTMClient() {
  useEffect(() => {
    const loadGTM = () => {
      if (window.gtmDidInit) return;
      window.gtmDidInit = true;
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-50440B50JK";
      script.async = true;
      document.head.appendChild(script);
      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-50440B50JK');
      `;
      document.head.appendChild(inlineScript);
    };
    const onUserInteraction = () => {
      loadGTM();
      window.removeEventListener("scroll", onUserInteraction);
      window.removeEventListener("click", onUserInteraction);
    };
    window.addEventListener("scroll", onUserInteraction);
    window.addEventListener("click", onUserInteraction);
    return () => {
      window.removeEventListener("scroll", onUserInteraction);
      window.removeEventListener("click", onUserInteraction);
    };
  }, []);
  return null;
} 