// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Your Company Name</title>
        <meta name="description" content="Learn about our company history, mission, and values." />
      </Head>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Founded in [Year], [Your Company Name] started with a simple
                vision: [Initial Vision/Problem Solved]. We began as a small
                team of [Number] individuals passionate about [Industry/Area of
                Expertise]. Over the years, we've grown and evolved, adapting
                to the ever-changing landscape of [Industry]. Our journey has
                been marked by [Key Milestones/Achievements], always staying
                true to our core values.  We started by providing [initial service].  We have since grown to a full service CRM consultancy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                At [Your Company Name], our mission is to [Your Company
                Mission - e.g., empower businesses through innovative CRM
                solutions]. We strive to [Key Actions/Goals related to the
                mission - e.g., deliver exceptional service, build
                long-lasting relationships, and drive sustainable growth]. We
                believe in [Core Beliefs driving the mission].
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Integrity:</strong> We operate with honesty and
                  transparency in all our interactions.
                </li>
                <li>
                  <strong>Customer Focus:</strong> Our clients are at the
                  heart of everything we do.
                </li>
                <li>
                  <strong>Innovation:</strong> We constantly seek new and
                  better ways to serve our clients.
                </li>
                <li>
                  <strong>Excellence:</strong> We are committed to
                  delivering the highest quality services.
                </li>
                <li>
                  <strong>Collaboration:</strong> We believe in the power of
                  teamwork and partnership.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle>Why choose us?</CardTitle>
            </CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>We have many years experience working with CRM systems</li>
                    <li>Certified Hubspot Partner</li>
                    <li>Proven methodology that delivers consistent results</li>
                    <li>We work with clients of all shapes and sizes</li>
                </ul>
                </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};

export default AboutUsPage;