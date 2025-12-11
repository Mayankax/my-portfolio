import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pb-24">
      {/* HEADER */}
      <section className="text-center mt-6 mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Contact Me
        </motion.h1>

        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Feel free to reach out for opportunities, collaborations, or any questions about my work.
        </p>
      </section>

      {/* CONTACT CARD */}
      <section className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-sm border space-y-8">

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">mayankbansal857@gmail.com</p>
          </div>

          <Button asChild>
            <a href="mailto:mayankbansal857@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Send Mail
            </a>
          </Button>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-600">github.com/Mayankax</p>
          </div>

          <Button variant="outline" asChild>
            <a href="https://github.com/Mayankax" target="_blank">
              <Github className="mr-2 h-4 w-4" /> Visit
            </a>
          </Button>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-600">linkedin.com/in/mayankbansal818</p>
          </div>

          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/mayankbansal818" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> Visit
            </a>
          </Button>
        </motion.div>
      </section>

    </div>
  );
}
