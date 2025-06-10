import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const AboutPage = () => {
    return (
        <div className="bg-ivory dark:bg-dark-background min-h-screen py-16 md:py-24 transition-colors duration-500">

            <Helmet>
                <title>About BaliLore | Cultural Stories and Mission</title>
                <meta name="description" content="Learn about BaliLore's mission to preserve and share Bali's rich culture through community storytelling, art, and heritage documentation." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://balilore-staging.vercel.app/about" />
                <meta property="og:title" content="About BaliLore | Cultural Stories and Mission" />
                <meta property="og:description" content="Discover the purpose behind BaliLore – a platform where locals and travelers contribute authentic stories and cultural insights from Bali." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://balilore-staging.vercel.app/about" />
                <meta name="twitter:title" content="About BaliLore | Cultural Stories and Mission" />
                <meta name="twitter:description" content="Learn how BaliLore is building a community around preserving and sharing Bali's untold stories, art, and culture." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" />

                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12 fade-in" style={{ animationDelay: '0.1s' }}>
                        <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-accent dark:text-white mb-4">
                            About BaliLore
                        </h1>
                        <p className="font-lora text-lg text-gray-700 dark:text-dark-text-primary leading-relaxed">
                            Discover the story behind our platform dedicated to the vibrant culture of Bali.
                        </p>
                    </div>

                    <div className="card mb-12 fade-in">
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-6 leading-relaxed text-lg">
                            BaliLore.com is a city-focused microsite where locals and visitors share Balian tales, hidden histories, and cultural insights—through photos, videos, poems, and street art.
                        </p>
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-6 leading-relaxed text-lg">
                            Our platform was created with a simple mission: to preserve and celebrate the rich cultural heritage of Bali through authentic storytelling and community engagement. We believe that every corner of this beautiful island holds stories waiting to be told, and every person who has experienced Bali carries a unique perspective worth sharing.
                        </p>

                        <h2 className="font-playfair text-2xl md:text-3xl font-bold mt-8 mb-4 text-accent dark:text-white">Our Mission</h2>
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-4 leading-relaxed text-lg">
                            At BaliLore, we aim to:
                        </p>
                        <ul className="font-lora text-gray-700 dark:text-dark-text-primary space-y-2 list-disc list-inside mb-6 leading-relaxed text-lg">
                            <li>Collect and preserve authentic Balinese stories and cultural knowledge.</li>
                            <li>Create a platform where both locals and visitors can share their experiences.</li>
                            <li>Promote cultural understanding and appreciation of Bali's rich heritage.</li>
                            <li>Support local artists, writers, and cultural practitioners.</li>
                            <li>Build a comprehensive digital archive of Bali's evolving cultural landscape.</li>
                        </ul>

                        <h2 className="font-playfair text-2xl md:text-3xl font-bold mt-8 mb-4 text-accent dark:text-white">Join Our Community</h2>
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-6 leading-relaxed text-lg">
                            Whether you're a lifelong resident of Bali, a frequent visitor, or someone who has been touched by Bali's magic from afar, we invite you to become part of our growing community. Share your stories, read others' experiences, and help us create a living testament to the beauty and complexity of Balinese culture.
                        </p>
                        <div className="mt-8 text-center">
                            <Link to="/submit" className="btn-primary font-lora text-lg px-8 py-3">
                                Share Your Story
                            </Link>
                        </div>
                    </div>

                    <div className="card fade-in" style={{ animationDelay: '0.5s' }}>
                        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-accent dark:text-white">Contact Us</h3>
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-4 leading-relaxed text-lg">
                            Have questions or suggestions? We'd love to hear from you!
                        </p>
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-2 text-lg">
                            <strong>Email:</strong> <a href="mailto:info@balilore.com" className="text-primary hover:underline">info@balilore.com</a>
                        </p>
                        <p className="font-lora text-gray-700 dark:text-dark-text-primary mb-6 text-lg">
                            <strong>Location:</strong> Bali, Indonesia
                        </p>
                        <div className="text-center">
                            <a href="mailto:info@balilore.com" className="btn-ghost font-lora text-lg px-8 py-3">
                                Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;