'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import {
  GraduationCap,
  Users,
  Trophy,
  Code,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Menu,
  X,
  BookOpen,
} from 'lucide-react';

const stats = [
  { value: '2,500+', label: 'Graduates', icon: GraduationCap },
  { value: '95%', label: 'Employment Rate', icon: TrendingUp },
  { value: '50+', label: 'Partner Companies', icon: Users },
  { value: '4.9', label: 'Student Rating', icon: Star },
];

const courses = [
  {
    id: 1,
    name: 'Backend Bootcamp',
    description: 'Master Node.js, Python, databases, and API development',
    duration: '6 months',
    icon: Database,
    price: 'From 4,000,000 UZS/month',
    features: ['Node.js & Express', 'Python & Django', 'PostgreSQL', 'REST & GraphQL APIs', 'Cloud Deployment'],
    target: 'backend',
  },
  {
    id: 2,
    name: 'Frontend Pro',
    description: 'Build modern web applications with React and TypeScript',
    duration: '4 months',
    icon: Globe,
    price: 'From 3,500,000 UZS/month',
    features: ['React & TypeScript', 'Next.js', 'Tailwind CSS', 'State Management', 'Testing'],
    target: 'frontend',
  },
  {
    id: 3,
    name: 'Full Stack Development',
    description: 'Complete web development from frontend to backend',
    duration: '8 months',
    icon: Code,
    price: 'From 5,000,000 UZS/month',
    features: ['React + Node.js', 'Database Design', 'Authentication', 'CI/CD', 'Portfolio Project'],
    target: 'fullstack',
  },
  {
    id: 4,
    name: 'Mobile Development',
    description: 'Create iOS and Android apps with React Native',
    duration: '5 months',
    icon: Smartphone,
    price: 'From 4,200,000 UZS/month',
    features: ['React Native', 'Flutter Basics', 'App Store Deployment', 'Push Notifications', 'Offline Support'],
    target: 'mobile',
  },
];

const testimonials = [
  {
    name: 'Aziz Karimov',
    role: 'Full Stack Developer at Google',
    image: null,
    content: 'Studify gave me the skills and confidence to land my dream job. The practical approach and dedicated mentors made all the difference.',
  },
  {
    name: 'Dilnoza Rahimova',
    role: 'Frontend Lead at Yandex',
    image: null,
    content: 'The best decision I made was joining Studify. Within 6 months, I went from beginner to working at a top tech company.',
  },
  {
    name: 'Bobur Toshmatov',
    role: 'Backend Engineer at Epam',
    image: null,
    content: 'The curriculum is up-to-date with industry standards. I learned technologies that companies actually use.',
  },
];

const branches = [
  { name: 'Main Branch', address: 'Tashkent, Chilanzar-5', phone: '+99890 123 45 67' },
  { name: 'Branch 2', address: 'Tashkent, Yunusabad-14', phone: '+99890 234 56 78' },
  { name: 'Online Campus', address: 'Virtual Classes', phone: 'N/A' },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Studify</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Courses
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                About Us
              </a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Reviews
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button className="bg-primary text-primary-foreground" onClick={() => setRegisterOpen(true)}>
                Register Now
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <div className="px-4 py-3 space-y-3">
              <a href="#courses" className="block text-sm font-medium">Courses</a>
              <a href="#about" className="block text-sm font-medium">About Us</a>
              <a href="#testimonials" className="block text-sm font-medium">Reviews</a>
              <a href="#contact" className="block text-sm font-medium">Contact</a>
              <hr />
              <Button variant="outline" className="w-full" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground" onClick={() => setRegisterOpen(true)}>
                Register Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-amber-500 text-amber-950 text-sm px-4 py-1">
              New batch starting July 15th
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Launch Your Tech Career
              <br />
              <span className="text-primary">With Expert Training</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uzbekistan&apos;s leading programming bootcamp. Learn from industry experts,
              build real projects, and get hired by top tech companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground" onClick={() => setRegisterOpen(true)}>
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setContactOpen(true)}>
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-lg bg-card border">
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-focused curriculum designed to get you job-ready.
              Choose your path and start building your future today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <course.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{course.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-4">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-medium text-primary mb-4">{course.price}</p>
                  <Button className="w-full bg-primary text-primary-foreground" onClick={() => setRegisterOpen(true)}>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Studify?</h2>
            <p className="text-muted-foreground">
              Everything you need to succeed in your tech career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
              <p className="text-muted-foreground">
                hands-on projects and real-world scenarios. Build a portfolio while you learn.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
              <p className="text-muted-foreground">
                Learn from professionals working at top companies. Get personalized guidance.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Support</h3>
              <p className="text-muted-foreground">
                Resume preparation, mock interviews, and direct connections with hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Graduates Say</h2>
            <p className="text-muted-foreground">
              Success stories from our alumni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-8 opacity-90">
                Have questions? We&apos;re here to help. Reach out and our team will
                get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+998 90 123 45 67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@studify.uz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span>Mon - Sat: 9:00 - 20:00</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {branches.map((branch) => (
                  <div key={branch.name} className="p-3 rounded bg-white/10">
                    <p className="font-medium">{branch.name}</p>
                    <p className="text-sm opacity-80">{branch.address}</p>
                    <p className="text-sm opacity-80">{branch.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6">
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input id="contact-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" placeholder="+998 XX XXX XX XX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-course">Interested In</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.target}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="Tell us about yourself..." rows={3} />
                </div>
                <Button className="w-full bg-primary text-primary-foreground">
                  Send Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portal Access Section */}
      <section id="portals" className="py-16 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Your Portal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sign in to your dedicated portal to manage courses, track progress, or administer the system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Student Portal */}
            <Card className="hover:shadow-lg transition-shadow hover:border-primary cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Student</h3>
                    <p className="text-sm text-muted-foreground">Track your progress & courses</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/sign-in">Access Portal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Teacher Portal */}
            <Card className="hover:shadow-lg transition-shadow hover:border-primary cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Teacher</h3>
                    <p className="text-sm text-muted-foreground">Manage classes & assignments</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/sign-in">Access Portal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Parent Portal */}
            <Card className="hover:shadow-lg transition-shadow hover:border-primary cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Parent</h3>
                    <p className="text-sm text-muted-foreground">Monitor your children&apos;s progress</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/sign-in">Access Portal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Admin Portal */}
            <Card className="hover:shadow-lg transition-shadow hover:border-primary cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center">
                    <Target className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Admin</h3>
                    <p className="text-sm text-muted-foreground">System administration</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/sign-in">Access Portal</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Studify</h3>
              <p className="text-sm text-muted-foreground">Your gateway to tech excellence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground">Courses</Link></li>
                <li><Link href="#portals" className="text-sm text-muted-foreground hover:text-foreground">Portals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
                <li><a onClick={() => setContactOpen(true)} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Contact</a></li>
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Help</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Register Dialog */}
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for a Course</DialogTitle>
            <DialogDescription>
              Fill in your details and we&apos;ll contact you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="reg-name">Full Name *</Label>
              <Input id="reg-name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-phone">Phone Number *</Label>
              <Input id="reg-phone" placeholder="+998 XX XXX XX XX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-email">Email</Label>
              <Input id="reg-email" type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-course">Select Course *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.target}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full bg-primary text-primary-foreground">
              Submit Registration
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Choose how you&apos;d like to connect with us.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="h-24 flex-col">
              <Phone className="h-6 w-6 mb-2" />
              <span>Call Us</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col">
              <Mail className="h-6 w-6 mb-2" />
              <span>Email</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col col-span-2">
              <MapPin className="h-6 w-6 mb-2" />
              <span>Visit Us</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
