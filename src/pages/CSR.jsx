
import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import csrMain from '../assets/images/csr/csr.jpeg';
import pillar1 from '../assets/images/csr/building.png';
import pillar2 from '../assets/images/csr/education.jpg';
import pillar3 from '../assets/images/csr/women.jpg';
import pillar4 from '../assets/images/csr/youth.jpg';
import styles from './CSR.module.css';
import { setMeta } from '../utils/seo';


export default function CSR() {
  useEffect(() => {
    setMeta({
      title: 'MESL CSR — Community Involvement & Social Responsibility',
      description: 'Discover Metsad Engineering Services Limited’s commitment to sustainable partnerships and community development.',
      url: window.location.href
    });
  }, []);

  return (
    <>
      <div className={styles['csr-page']}>
        <main className={styles['csr-content']}>
          <header className={styles['csr-header']}>
          <div className={styles['csr-header-bg']}>
            <img src={csrMain} alt="CSR Main" className={styles['csr-main-img']} />
            <div className={styles['csr-header-overlay']} />
          </div>
          <div className={styles['csr-header-content']}>
            <h1 className={styles['csr-title']}>Community Involvement & Social Responsibility</h1>
            <h2 className={styles['csr-subtitle']}>Beyond Operations: Building Sustainable Partnerships with Our Host Communities</h2>
          </div>
        </header>

        <section className={styles['csr-intro']}>
          <h2 className={styles['csr-section-title']}>Our Guiding Philosophy</h2>
          <div className={styles['underline']} />
          <p className={styles['csr-lead']}>
            At Metsad Engineering Services Limited (MESL), we recognize that our license to operate is rooted in the goodwill and well-being of our host communities. As an indigenous company, we are not visitors; we are partners, neighbors, and stakeholders in the long-term development of the region. Our approach to community involvement is proactive, inclusive, and sustainable, moving beyond philanthropy to foster mutual respect, shared prosperity, and lasting peace. We engage not as a corporation imposing solutions, but as a committed partner listening to and growing with the community.
          </p>
        </section>

        <section className={styles['csr-pillars']}>
          <h2 className={styles['csr-section-title']}>Pillars of Our Community Engagement</h2>
          <div className={styles['underline']} />
          <div className={styles['csr-pillars-grid']}>
            <div className={styles['csr-pillar']}>
              <img src={pillar1} alt="Human Capital Development" className={styles['csr-pillar-img']} />
              <div className={styles['csr-pillar-content']}>
                <h3>Human Capital Development & Educational Empowerment</h3>
                <ul>
                  <li>MESL Merit Scholarship Scheme: Annual, merit-based scholarships for outstanding indigenes of host communities pursuing STEM (Science, Technology, Engineering, Mathematics) and technical/vocational courses at tertiary institutions.</li>
                  <li>Vocational & Skills Acquisition Training: Partnership with local technical institutes to provide certified training in welding, fitting, electrical installation, coating application, and non-destructive testing for community youth, creating a pipeline of skilled talent for the industry.</li>
                  <li>STEM Outreach Programs: Sponsorship of science labs, inter-school competitions, and career talks in secondary schools to ignite early interest in engineering and technology.</li>
                </ul>
              </div>
            </div>
            <div className={styles['csr-pillar']}>
              <img src={pillar2} alt="Sustainable Infrastructure" className={styles['csr-pillar-img']} />
              <div className={styles['csr-pillar-content']}>
                <h3>Sustainable Infrastructure & Social Amenities</h3>
                <ul>
                  <li>Water & Sanitation: Provision of potable water through borehole projects and community water schemes, coupled with sanitation education.</li>
                  <li>Community Health: Renovation and equipping of primary healthcare centers and organizing periodic free medical outreach (Health Missions) with volunteer doctors and nurses.</li>
                  <li>Educational Infrastructure: Construction and rehabilitation of classroom blocks, provision of desks, books, and learning materials for primary and secondary schools.</li>
                  <li>Power & Light: Provision of solar-powered street lighting for community security and public spaces.</li>
                </ul>
              </div>
            </div>
            <div className={styles['csr-pillar']}>
              <img src={pillar3} alt="Youth Empowerment" className={styles['csr-pillar-img']} />
              <div className={styles['csr-pillar-content']}>
                <h3>Youth Empowerment & Economic Inclusion</h3>
                <ul>
                  <li>MESL Artisans Guild: Formation and support for cooperatives of local artisans (welders, painters, riggers, scaffolders). We provide toolkits, business management training, and channel subcontracting opportunities to them where feasible.</li>
                  <li>Community Vendor Development Program: Capacity building for local SMEs and vendors on HSE standards, quality control, and bidding processes to enhance their competitiveness for supply chain opportunities.</li>
                  <li>Agricultural Support Grants: Supporting agrarian communities with modern farming inputs and techniques to boost local food production and agri-business.</li>
                </ul>
              </div>
            </div>
            <div className={styles['csr-pillar']}>
              <img src={pillar4} alt="Stakeholder Engagement" className={styles['csr-pillar-img']} />
              <div className={styles['csr-pillar-content']}>
                <h3>Proactive Stakeholder Engagement & Conflict Resolution</h3>
                <ul>
                  <li>Structured Dialogue Framework:</li>
                  <li>Quarterly Consultative Forum: A formal meeting with the Community Leadership Council (CLC), comprising the Royal Fathers (Traditional Rulers), Youth Leaders, Women Representatives, and Community Development Committee (CDC) chairs.</li>
                  <li>Monthly Liaison Officer Meetings: Our dedicated Community Relations Officers meet with youth and women’s groups for grassroots feedback.</li>
                  <li>Transparent Grievance Mechanism: A publicly accessible, fair, and timely process for logging, investigating, and resolving community concerns related to our operations. All grievances are documented and addressed with feedback provided to complainants.</li>
                  <li>Partnership in Peace-Building: Active participation in and sponsorship of community peace and security summits. We collaborate with local leaders to mediate disputes that could impact social stability and our operational environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['csr-principles']}>
          <h2 className={styles['csr-section-title']}>Our Engagement Principles</h2>
          <div className={styles['underline']} />
          <ul>
            <li>Participatory Needs Assessment: We do not assume community needs. We engage in joint assessments to identify and prioritize projects.</li>
            <li>Joint Project Implementation: Formation of Project Monitoring Committees with community representatives to ensure transparency in project execution.</li>
            <li>Respect for Culture and Tradition: All engagements are conducted with utmost respect for traditional institutions and community customs.</li>
            <li>Sustainability Focus: We prioritize initiatives that have long-term viability and empower the community to maintain them independently.</li>
          </ul>
        </section>

        <section className={styles['csr-commitment']}>
          <h2 className={styles['csr-section-title']}>Commitment to the Future</h2>
          <div className={styles['underline']} />
          <p>
            Metsad Engineering Services is committed to being a catalyst for positive, generational change in our host communities. We measure our success not only by our safety and project milestones but by the strengthened social fabric, the enabled youth, and the improved quality of life we help foster. Our goal is to build a legacy of true partnership, where community development and sustainable business growth go hand in hand.
          </p>
          <h3>For Community Relations Inquiries:</h3>
          <p>
            <strong>Head, Community Relations & Sustainable Development</strong><br />
            Metsad Engineering Services Limited<br />
            [Email] | [Phone Number] | [Office Address]
          </p>
        </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
