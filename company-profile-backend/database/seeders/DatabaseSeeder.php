<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\Portfolio;
use App\Models\Testimonial;
use App\Models\Article;
use App\Models\CompanySetting;
use Illuminate\Support\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Services
        Service::create([
            'title' => 'Web Development',
            'description' => 'Modern, high-performance, and responsive websites and portals built with advanced frameworks like Next.js.',
            'icon' => 'Code',
            'order' => 1,
            'is_active' => true,
        ]);
        Service::create([
            'title' => 'UI/UX Interface Design',
            'description' => 'Bespoke interface designs and wireframes focused on driving high visual engagement and natural usability.',
            'icon' => 'Layers',
            'order' => 2,
            'is_active' => true,
        ]);
        Service::create([
            'title' => 'Mobile Application',
            'description' => 'Robust and fluid native and hybrid mobile applications targeting both iOS and Android platforms.',
            'icon' => 'Smartphone',
            'order' => 3,
            'is_active' => true,
        ]);
        Service::create([
            'title' => 'Cloud Infrastructure',
            'description' => 'Secure, reliable, and scalable hosting architecture set up across top-tier vendors (AWS, Google Cloud).',
            'icon' => 'Database',
            'order' => 4,
            'is_active' => true,
        ]);

        // 2. Portfolios
        Portfolio::create([
            'title' => 'Fintech Mobile Wallet',
            'category' => 'Mobile Apps',
            'description' => 'Bespoke digital banking dashboard and transactions wallet architecture.',
            'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
            'client' => 'FinTech Corp',
            'year' => 2024,
            'is_featured' => true,
        ]);
        Portfolio::create([
            'title' => 'Enterprise CRM Platform',
            'category' => 'Web Apps',
            'description' => 'Scalable client management CRM dashboard built with React and Laravel APIs.',
            'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
            'client' => 'DapFlow Retail',
            'year' => 2023,
            'is_featured' => true,
        ]);
        Portfolio::create([
            'title' => 'Logistics Routing Engine',
            'category' => 'Automation',
            'description' => 'Real-time geographical route planning engine powered by AI optimization models.',
            'image_url' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
            'client' => 'TransCargo Ltd',
            'year' => 2024,
            'is_featured' => false,
        ]);

        // 3. Testimonials
        Testimonial::create([
            'name' => 'Jessica R.',
            'position' => 'CEO',
            'company' => 'Algosys',
            'content' => 'DapFlow transformed our outdated system into a modern, beautifully fast web portal. Our clients are absolutely in love with the new design!',
            'rating' => 5,
            'is_active' => true,
        ]);
        Testimonial::create([
            'name' => 'Budi Santoso',
            'position' => 'CTO',
            'company' => 'FinTech ID',
            'content' => 'Their engineering standard is top-tier. Clean code, punctual delivery, and excellent communication throughout the project.',
            'rating' => 5,
            'is_active' => true,
        ]);

        // 4. Articles
        Article::create([
            'title' => 'Building Scalable Next.js 14 Web Applications',
            'slug' => 'building-scalable-nextjs-14',
            'excerpt' => 'Learn the core techniques to optimize your Next.js application for speed, performance, and advanced server-side caching.',
            'content' => '<h2>The Shift to Server Components</h2><p>Next.js 14\'s introduction of React Server Components by default has completely revolutionized how we approach data fetching. By executing fetches on the server, we eliminate client-side JavaScript execution overhead, reduce initial page load times, and drastically improve user experience.</p><h2>Implementing Incremental Static Regeneration</h2><p>Incremental Static Regeneration (ISR) is one of Next.js\'s most powerful capabilities. It allows you to create or update static pages after you\'ve built your site. By setting the revalidate parameter, Next.js will rebuild the page in the background as new requests come in, ensuring your site remains static yet dynamic.</p><h2>Best Practices for Styling and Components</h2><p>Pairing Next.js 14 with Tailwind CSS and Radix-based UI libraries (like shadcn/ui) lets you write composable components that match your precise design systems without bloating your production stylesheet. Remember to utilize variables for theme switching and CSS HSL scales for harmonious colors.</p>',
            'thumbnail' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            'category' => 'Technology',
            'published_at' => Carbon::now(),
        ]);
        Article::create([
            'title' => 'The Philosophy of Premium Visual Aesthetics',
            'slug' => 'philosophy-of-premium-aesthetics',
            'excerpt' => 'How clean typography, precise grids, and harmonious HSL color spaces shape user engagement and premium brand perception.',
            'content' => '<h2>Visual Excellence in Digital Design</h2><p>In a world saturated with digital interfaces, visual excellence has ceased to be an afterthought; it is a primary product requirement. A premium aesthetic immediately builds authority, signals trust, and encourages longer user session durations.</p><h2>Color Harmony with HSL</h2><p>Avoid raw hex values where possible. Utilizing HSL or OKLCH variables in your theme settings allows you to shift luminosity and saturation programmatically. This ensures that hover effects, card focus borders, and system dark modes maintain perfect design continuity.</p><h2>Typography & Grids</h2><p>Premium designs rely on robust typography hierarchies (e.g., using Outfit or Inter from Google Fonts) and spacious layouts. Giving components room to breathe (generous margins, high line heights) creates an immediate feeling of premium quality.</p>',
            'thumbnail' => 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
            'category' => 'Design',
            'published_at' => Carbon::now(),
        ]);

        // 5. Settings
        CompanySetting::create(['key' => 'company_name', 'value' => 'DapFlow']);
        CompanySetting::create(['key' => 'address', 'value' => 'DapFlow Tower, 24th Floor, Jakarta, Indonesia']);
        CompanySetting::create(['key' => 'phone', 'value' => '+62 (21) 555-0199']);
        CompanySetting::create(['key' => 'email', 'value' => 'contact@dapflow.co.id']);
    }
}
