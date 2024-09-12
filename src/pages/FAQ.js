import "./Billing.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div>
      <h1 style={{ marginTop: "2rem" }}>FAQs</h1>
      <FAQAccordion />
    </div>
  );
}

function FAQAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Why do you need to know my medical history?
        </Accordion.Header>
        <Accordion.Body>
          When you become one of our patients, we will first ask you to complete
          a full medical history form. The form covers your medical health and
          history in detail, and asks about areas of the body that may seem
          unrelated to your dental health. However, we ask that you complete the
          forms as honestly and thoroughly as possible. The entire body works as
          a unit, and your oral health is intricately connected to the rest of
          you. Not having a complete medical history may result in dental
          treatment having adverse or unexpected effects. There are also oral
          manifestations of various systemic diseases that may lead to a delay
          in proper diagnosis without a full medical history. For a copy of our
          medical history form, please click the link below.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Why is it important to give you a complete list of my medications?
        </Accordion.Header>
        <Accordion.Body>
          A complete list of medications and their doses is an important part of
          your medical history. Many medications have side effects that will
          effect the health and appearance of your oral tissues. If we are aware
          of your medications, it may help us to explain certain oral
          conditions. More importantly, knowing your medications will help us to
          avoid writing prescriptions and doing procedures that would have an
          adverse reaction with what you are currently taking.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          How do you sterilize your instruments?
        </Accordion.Header>
        <Accordion.Body>
          Our instruments are processed after each patient using a multi-step
          process which includes both cleaning and sterilization. Instruments
          are first cleaned- meaning all debris is removed from the instrument-
          through either ultrasonic vibration, chemical treatment or scrubbing.
          The instruments are then sterilized -which means that all living
          organisms are killed- with the use of moist heat and pressurization.
          When possible, disposable items will be used.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          How often should I have my teeth cleaned?
        </Accordion.Header>
        <Accordion.Body>
          As a general guideline, we recommend that most patients visit the
          office for a cleaning and exam twice a year. However, we may adjust
          our recommendation based on your dental health, your habits, and your
          preferences.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          I have silver fillings. Should I be concerned about mercury poisoning?
        </Accordion.Header>
        <Accordion.Body>
          In a word- no. Amalgam fillings do contain a small amount of mercury.
          This has been a source of concern for many patients. The amount of
          mercury exposure, however, is well below what would be harmful to
          humans. Furthermore, removing old amalgam fillings because of concerns
          for mercury poisoning is not recommended, as the highest levels of
          exposure are on the day the filling is placed, and the day it is
          removed.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Do I really need X-rays?</Accordion.Header>
        <Accordion.Body>
          For the majority of our patients the answer is yes. Although we will
          not force anyone to have any procedure done that they object to, it is
          important to understand that X-rays are a very important tool in the
          diagnosis and treatment of dental problems. The amount of radiation in
          dental x-rays is very small, and the benefits far outweigh the risks.
          Without x-rays, it is often impossible for us to diagnose cavities and
          other issues while they are small and easily dealt with.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Don’t x-rays cost a small fortune?</Accordion.Header>
        <Accordion.Body>
          If you are concerned about the cost of any procedure, please feel free
          to ask. Unfortunately, there seems to be a myth that x-rays are
          astronomically expensive. Although it is understood that each person
          lives by a different budget, the most common dental x-rays are about
          $50.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>
          Should my child be given a fluoride treatment?
        </Accordion.Header>
        <Accordion.Body>
          We recommend that all children under the age of 14 receive a fluoride
          treatment at each of their cleaning appointments. Fluoride is
          beneficial both in the ingested form (such as in drinking water or
          with a fluoride vitamin) and topical form (such as in toothpaste and
          fluoride treatments). Ingested fluoride strengthens teeth that are yet
          to erupt, and topical fluoride strengthens the teeth that are already
          present in the mouth. Although it is true that too much ingested
          fluoride can cause problems, fluoride given in a measured dose has
          been shown to reduce tooth decay by 40-60%. Our fluoride treatments
          are given in the form of a fluoride varnish, which is a very safe and
          effective way to deliver a measured dose of topical fluoride to your
          child’s teeth.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>
          Does my water at home have fluoride in it?
        </Accordion.Header>
        <Accordion.Body>
          Fluoride in the community water supply is a safe and effective way to
          deliver a measured dose of ingested fluoride to children. Fluoride
          does not occur naturally in the ground water of this area at a level
          which benefits oral health. However, some municipalities have added
          fluoride to their water supply. Of course, don’t forget- many of us
          drink bottled water. If your child is drinking exclusively bottled
          water, this may change the amount of fluoride he or she is receiving.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>
          Is it bad for me to have fluoride in my drinking water?
        </Accordion.Header>
        <Accordion.Body>
          Recently, a popular TV talk show host ran a segment on the evils of
          fluoride in our drinking water. Understandably, this type of thing
          causes concern to those watching. However, the claims presented during
          this television segment showed an alarming lack of scientific evidence
          supporting them.ollowing the segment, the CDC, ADA, ADHA and the
          Harvard School of Dental Medicine all released statements on the
          safety and effectiveness of fluoride in our drinking water. In fact,
          the CDC has named community water fluoridation to be one of the 10
          great public health achievements of the 20th century.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>What does my insurance cover?</Accordion.Header>
        <Accordion.Body>
          The best way to find out what your insurance covers is to contact your
          insurance company, or to check the paperwork provided to you by your
          insurance company. We will be happy to tell you what most insurance
          companies commonly cover. However, each individual policy is
          different- even within the same company.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header>
          When should I bring my child in for his/her first cleaning?
        </Accordion.Header>
        <Accordion.Body>
          We recommend bringing your child to visit us starting at age 3.
          Although many 3 year old children are not at all interested in
          actually getting their teeth cleaned, it is an important life
          experience. We will make the visit as pleasant as possible, explaining
          ourselves every step of the way. We want your child to have an
          enjoyable experience as much as you do. What we want to avoid is the
          unfortunate experience in which an older child (or adult!) has never
          had a pleasant visit with the dentist, and can only associate dental
          visits with toothaches and trauma. If your child is less than 3 years
          old, and you feel that he or she has a dental issue- such as a
          discolored tooth, or dental trauma, please contact one of the very
          qualified pediatric dentists in the area. They will also be happy to
          provide cleaning and preventive care to even the youngest of patients.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header>What electric toothbrush is best?</Accordion.Header>
        <Accordion.Body>
          Although not everyone needs an electric toothbrush, they certainly are
          a great tool for improving your oral health. If you have periodontal
          disease, a tendency to develop staining, a tendency to be too
          aggressive while brushing or a disability which prevents you from
          being effective with a manual toothbrush, an electric toothbrush could
          be the key to a healthy mouth. Besides, even those of us who don’t
          need an electric toothbrush will love the super clean feeling you’ll
          have when you use one. When choosing a toothbrush, be sure to find one
          that is easy to keep clean, has a rechargeable battery, and has a
          small head. At our office, we sell Sonicare toothbrushes, but we also
          like several Oral B models. Be sure to ask which one is best for you
          at your next appointment.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header>
          What kind of toothpaste should I use?
        </Accordion.Header>
        <Accordion.Body>
          There are so many different toothpastes on the market, it’s a bit
          overwhelming. The answer to which is best really depends on the
          individual. When you visit us for your cleaning and check up, we will
          be happy to guide you as to which toothpaste works best for your
          individual needs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header>
          I’m leaving the area, and would like my records transferred. How can I
          get them?
        </Accordion.Header>
        <Accordion.Body>
          Although we’ll be sad to see you go, we’ll be happy to help you out.
          We’ll need the name, address, email address and phone number of your
          new dentist, along with a signed letter from you requesting the
          records transfer. Please allow at least a week for all current x-rays
          to be copied and sent.{" "}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
