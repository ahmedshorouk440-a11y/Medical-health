
import Accordion from "react-bootstrap/Accordion";
import { FaStethoscope, FaHospital, FaPills, FaCalendarAlt } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Banner from '../componets/Banner/Banner';
import "./Faq.css";
import faqDesignImg from "../Assets/fqs.jpg"; 
import PageTransition from '../componets/Page';


function FaqPage() {
  return (
    <PageTransition>
    <>

      <Banner title="Faq's" smtitle="Faq's" />

      {/* Container للـ FAQ */}
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Left: FAQ */}
          <div className="col-md-6">
            <div className="faq-title text-center mb-4">
              <div className="icons mb-3">
                <FaStethoscope />
                <FiTwitter />
                <FaHospital />
              </div>
              <h2>Frequently Asked Questions</h2>
            </div>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How can I book a doctor appointment?
                </Accordion.Header>
                <Accordion.Body>
                  You can easily book an appointment by selecting the doctor,
                  choosing the available time, and confirming your booking
                  through the application.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can I choose a specific doctor?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can browse doctors by specialty and choose
                  the doctor you prefer based on ratings and availability.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Does the application support emergency services?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the application provides quick access to emergency
                  services and allows you to contact nearby hospitals instantly.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How do I cancel or reschedule an appointment?
                </Accordion.Header>
                <Accordion.Body>
                  You can cancel or reschedule appointments from your dashboard
                  by selecting the appointment and choosing the appropriate option.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Is there a mobile app available?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the application is available on both Android and iOS,
                  allowing you to manage appointments on the go.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  How can I contact my doctor directly?
                </Accordion.Header>
                <Accordion.Body>
                  After booking, you can use the messaging feature to communicate
                  directly with your doctor for any questions or follow-ups.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Are my medical records safe?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, all your medical records are securely stored and can
                  only be accessed by you and authorized medical personnel.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Can I get a prescription online?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, your doctor can issue prescriptions through the application,
                  which you can view or download instantly.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  How do I pay for my appointments?
                </Accordion.Header>
                <Accordion.Body>
                  Payments can be made directly through the app using credit/debit
                  cards or other supported online payment methods.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Does the app provide health tips?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the app offers personalized health tips and reminders
                  based on your medical history and appointments.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Right: Illustration */}
          <div className="col-md-6 text-center">
            <img
              src={faqDesignImg}
              alt="FAQ Illustration"
              className="img-fluid rounded"
            />
          </div>

        </div> {/* نهاية row */}
      </div> {/* نهاية container للـ FAQ */}

      {/* Footer أسفل الصورة */}
      <div className="faq-footer py-5">
        <div className="footer-title text-center mb-4">
          <h3>تابع كل معلوماتك الطبية بسهولة وسرعة</h3>
        </div>

        <div className="container">
          <div className="row justify-content-center g-4">

            <div className="col-md-3 col-sm-6">
              <div className="feature-card text-center p-3 shadow-sm rounded">
                <FaStethoscope className="feature-icon mb-2" />
                <h5>Doctors</h5>
                <p>معلومات الأطباء المتاحة للتواصل والحجز بسهولة </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="feature-card text-center p-3 shadow-sm rounded">
                <FaPills className="feature-icon mb-2" />
                <h5>Medicine</h5>
                <p>الوصفات الطبية والعلاجات المتاحة عبر التطبيق</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="feature-card text-center p-3 shadow-sm rounded">
                <FaHospital className="feature-icon mb-2" />
                <h5>Hospitals</h5>
                <p>قائمة المستشفيات والخدمات الطارئة بالقرب منك</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="feature-card text-center p-3 shadow-sm rounded">
                <FaCalendarAlt className="feature-icon mb-2" />
                <h5>Appointments</h5>
                <p>جدولة المواعيد ومتابعة كل حجوزاتك بسهولة </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
   </PageTransition> 
  );
}

export default FaqPage;