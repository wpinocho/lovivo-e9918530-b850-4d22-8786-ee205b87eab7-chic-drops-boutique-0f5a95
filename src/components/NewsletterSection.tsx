import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Editorial-style newsletter subscription
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-secondary py-20 border-t">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-foreground/10 rounded-full p-3">
                    <Mail className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold">
                  Thank You
                </h3>
                <p className="text-muted-foreground">
                  You're now on our list. Expect beautiful things.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold">
                    Stay in Touch
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Be first to hear about new arrivals and exclusive events
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 border-foreground/20 focus:border-foreground"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto uppercase tracking-wider"
                  >
                    {logic.isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive">
                    {logic.error}
                  </p>
                )}
                
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};
