"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Users, Send } from "lucide-react";
import { useState } from "react";

interface ContactFormProps {
  className?: string;
  showToggle?: boolean;
  defaultFormType?: 'advertiser' | 'publisher';
  onSubmit?: (data: any, formType: 'advertiser' | 'publisher') => Promise<void>;
}

export default function ContactForm({ 
  className = "", 
  showToggle = true, 
  defaultFormType = 'advertiser',
  onSubmit 
}: ContactFormProps) {
  const [formType, setFormType] = useState<'advertiser' | 'publisher'>(defaultFormType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [advertiserForm, setAdvertiserForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [publisherForm, setPublisherForm] = useState({
    name: "",
    website: "",
    email: "",
    phone: "",
    traffic: "",
    message: "",
  });

  const handleAdvertiserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (onSubmit) {
        await onSubmit(advertiserForm, 'advertiser');
      } else {
        // Default API submission
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...advertiserForm,
            service: 'advertising',
            budget: advertiserForm.budget
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }
      }

      setSubmitStatus({
        type: 'success',
        message: "Your message has been sent. We'll get back to you soon!"
      });

      setAdvertiserForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePublisherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (onSubmit) {
        await onSubmit(publisherForm, 'publisher');
      } else {
        // Default API submission
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...publisherForm,
            service: 'publishing',
            company: publisherForm.website
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }
      }

      setSubmitStatus({
        type: 'success',
        message: "Your message has been sent. We'll get back to you soon!"
      });

      setPublisherForm({
        name: "",
        website: "",
        email: "",
        phone: "",
        traffic: "",
        message: "",
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Toggle Switch */}
      {showToggle && (
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            <button
              onClick={() => setFormType('advertiser')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                formType === 'advertiser'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Target className="w-4 h-4" />
              For Advertisers
            </button>
            <button
              onClick={() => setFormType('publisher')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                formType === 'publisher'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-4 h-4" />
              For Publishers
            </button>
          </div>
        </div>
      )}

      <Card className="bg-white border-gray-200">
        <CardContent className="p-8 bg-white">
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          {formType === 'advertiser' ? (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Advertisers</h3>
                <p className="text-gray-600">
                  Ready to take your brand to the next level? Let's drive growth together.
                </p>
              </div>

              <form onSubmit={handleAdvertiserSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={advertiserForm.name}
                      onChange={(e) => setAdvertiserForm({ ...advertiserForm, name: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company Name *</label>
                    <Input
                      placeholder="Your company name"
                      value={advertiserForm.company}
                      onChange={(e) => setAdvertiserForm({ ...advertiserForm, company: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={advertiserForm.email}
                      onChange={(e) => setAdvertiserForm({ ...advertiserForm, email: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+1 (xxx) xxx-xxxx"
                      value={advertiserForm.phone}
                      onChange={(e) => setAdvertiserForm({ ...advertiserForm, phone: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Advertising Budget *</label>
                  <Select
                    value={advertiserForm.budget}
                    onValueChange={(value) => setAdvertiserForm({ ...advertiserForm, budget: value })}
                    required
                  >
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your advertising goals and challenges..." 
                    className="min-h-[120px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    value={advertiserForm.message}
                    onChange={(e) => setAdvertiserForm({ ...advertiserForm, message: e.target.value })}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Let's Drive Growth Together"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Publishers</h3>
                <p className="text-gray-600">
                  Monetize your traffic with optimized strategies and exclusive partnerships.
                </p>
              </div>

              <form onSubmit={handlePublisherSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={publisherForm.name}
                      onChange={(e) => setPublisherForm({ ...publisherForm, name: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Website/App Name *</label>
                    <Input
                      placeholder="Your website or app name"
                      value={publisherForm.website}
                      onChange={(e) => setPublisherForm({ ...publisherForm, website: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={publisherForm.email}
                      onChange={(e) => setPublisherForm({ ...publisherForm, email: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+1 (xxx) xxx-xxxx"
                      value={publisherForm.phone}
                      onChange={(e) => setPublisherForm({ ...publisherForm, phone: e.target.value })}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Traffic Volume *</label>
                  <Select
                    value={publisherForm.traffic}
                    onValueChange={(value) => setPublisherForm({ ...publisherForm, traffic: value })}
                    required
                  >
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select traffic volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-10k">1,000 - 10,000 monthly visitors</SelectItem>
                      <SelectItem value="10k-50k">10,000 - 50,000 monthly visitors</SelectItem>
                      <SelectItem value="50k-100k">50,000 - 100,000 monthly visitors</SelectItem>
                      <SelectItem value="100k+">100,000+ monthly visitors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your website/app and monetization goals..." 
                    className="min-h-[120px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    value={publisherForm.message}
                    onChange={(e) => setPublisherForm({ ...publisherForm, message: e.target.value })}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Partner with 16edge"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
