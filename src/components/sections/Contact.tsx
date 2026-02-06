'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message should be at least 10 characters')
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    setSuccess(false);
    const result = schema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          setError(err.path[0] as keyof FormValues, { message: err.message });
        }
      });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 800));
    setSuccess(true);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container-base grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Let us build something remarkable.
          </h2>
          <p className="mt-4 text-white/70">
            Share your project goals and receive a data-driven roadmap tailored to your needs.
          </p>

          <div className="mt-8 space-y-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <FiMail className="text-primary-400" />
              farrukh.khan@example.com
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-primary-400" />
              +92 XXX XXXXXXX
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-primary-400" />
              Lahore, Punjab, Pakistan
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <Input placeholder="Your name" {...register('name')} />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder="Your email" type="email" {...register('email')} />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <Input placeholder="Subject" {...register('subject')} />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
            )}
          </div>
          <div>
            <Textarea placeholder="Tell me about your project" {...register('message')} />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-400"
            >
              Message sent successfully. I will get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
