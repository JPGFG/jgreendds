import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Procedures.css";
import Accordion from "react-bootstrap/Accordion";

export default function Procedures() {
  return (
    <div>
      <div>
        <h2>Select a Tab to Learn more </h2>
      </div>
      <Interface />
    </div>
  );
}

function Interface() {
  return (
    <div className="tabbers">
      <Tabs defaultActiveKey="extractions" id="tabber" className="mb-3" fill>
        <Tab eventKey="extractions" title="Extractions">
          <ExtractionsAccordion />
        </Tab>
        <Tab eventKey="rootcanal" title="Root Canals">
          <RootCanalAccordion />
        </Tab>
        <Tab eventKey="fillings" title="Fillings">
          <FillingsAccordion />
        </Tab>
        <Tab eventKey="crownbridge" title="Crown/Bridge">
          <CrownsAccordion />
        </Tab>
        <Tab eventKey="prosthetics" title="Prosthetics">
          <ProstheticsAccordion />
        </Tab>
        <Tab eventKey="prevention" title="Prevention">
          <PreventionAccordion />
        </Tab>
      </Tabs>
    </div>
  );
}

function ExtractionsAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dental Extractions</Accordion.Header>
        <Accordion.Body>
          Extractions are the removal of problematic teeth. An extraction may be
          performed if a tooth is severely damaged or decayed. Extractions may
          also be done to facilitate orthodontic treatment, or to make way for
          newly erupting teeth. Wisdom teeth are often routinely extracted as
          well, if they are posing a threat to the overall health of your mouth.
          Dr. Green & Dr. Fisher will decide whether or not they can extract the
          tooth themselves after diagnostic x-rays are taken. Depending on the
          condition of the tooth, the doctors may refer the patient to an Oral
          Surgeon for the extraction.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pre-Extraction Instructions</Accordion.Header>
        <Accordion.Body>
          If possible, bring someone to drive you home after your extraction.
          You may also want to schedule some time off, as you will want a couple
          of days to take it easy. If you are a woman on birth control pills,
          try to schedule your extraction during the final week of your cycle.
          It is also suggested that you take an anti-inflammatory medication,
          such as aspirin or ibuprofen prior to your extraction.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Post Op Instructions for Extractions
        </Accordion.Header>
        <Accordion.Body>
          At the end of your appointment, the doctor will have you bite down on
          gauze. You should leave the gauze in place for the first 45 minutes to
          an hour, or until it becomes saturated. If needed, replace the gauze,
          and leave in place for another 45 minutes. Be mindful of the fact that
          your mouth will be numb from local anesthetic. Do not eat or chew
          until the numbness wears off, as you run the risk of biting your own
          cheeks and lips. You may also want to take pain medication, such as
          Tylenol or Advil before the numbness wears off. During the first 24
          hours, you may want to use an ice pack or a bag of frozen peas for
          cold therapy. Alternate 20 minutes on, and 20 minutes off with the ice
          pack. This will help to reduce some of the swelling and tenderness
          which is to be expected immediately following an extraction. After the
          first 24 hours, switch to moist heat therapy. Use a warm washcloth,
          and alternate 10 minutes on, 10 minutes off. Please continue taking
          your prescription medications unless previously instructed otherwise.
          You may also wish to rest with your head elevated. Forming a blood
          clot is very important to the healing of your extraction site. Please
          adhere to the following guidelines to help in the formation of a blood
          clot. Avoid strenuous exercise and activities. Avoid hot or spicy food
          or drink. Avoid using straws or sucking on hard candy. Avoid rinsing
          or spitting. Do not brush or floss the night of the extraction. You
          may resume gentle oral hygiene the following day, but please avoid the
          extraction site as it begins to heal. Avoid carbonated or alcoholic
          beverages. DO NOT use smoke or tobacco products for 72 hours, as these
          will slow the healing process. If the blood clot should be lost
          prematurely, you will be at risk for a condition known as dry socket.
          Dry socket usually manifests 3-5 days after an extraction, and will
          result in a persistent and painful throbbing. Please call our office
          if you feel that you have developed dry socket. Please adhere to a
          diet of soft food and liquids for the first 2-3 days. After the first
          24 hours, you can begin rinsing with warm salt water (1/2 teaspoon of
          salt to 1 cup water) 3 times a day. This will help dislodge food from
          the extraction site.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>When to Call Us</Accordion.Header>
        <Accordion.Body>
          Please call us at (518)587-8885 if: You are experiencing severe pain.
          You have uncontrolled bleeding. You have swelling that increases or
          that last more than 2-3 days. You think you may have dry socket. You
          have any adverse reactions to medications. If the office is not open,
          please leave a message. The answering machine is checked on a regular
          basis, and someone will return your call promptly.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
function RootCanalAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Root Canal Therapy</Accordion.Header>
        <Accordion.Body>
          What is root canal therapy? This is an attempt to save a tooth which
          has become infected or inflamed. Root canals have gotten a bad
          reputation over the years, but in reality they are often a means of
          relieving tooth pain. Although Dr.Green performs root canal therapy,
          for more complicated cases, you will be referred to a root canal
          specialist, otherwise known as an Endodontist. Click on the link below
          for a more detailed explanation of root canal therapy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Post Op for Root Canal Therapy</Accordion.Header>
        <Accordion.Body>
          Avoid chewing or eating until the anesthetic used during your root
          canal wears off. It is not unusual for a tooth to feel tender for up
          to a week after a root canal, especially if you were in pain before
          the procedure was completed. In most cases, this pain can be
          alleviated with the use of over the counter pain medications such as
          Advil or Aleve. Your tooth has been filled with a temporary filling.
          It is not unusual for small pieces of the filling material to wear
          away. Continue preventive care, such as brushing and flossing of this
          area, as a tooth with a root canal can still get a cavity. However, if
          flossing would directly interfere with your temporary filling, you
          should avoid flossing in that area until a permanent restoration has
          been placed. It is very important to follow up your root canal therapy
          with a crown or other permanent restoration. Having a root canal is an
          effort to save a tooth that would otherwise be lost. However, the
          tooth will become more fragile than the original healthy tooth. The
          addition of a crown or other permanent restoration can strengthen the
          tooth and allow it to last a lifetime with proper care.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>When to Call Us</Accordion.Header>
        <Accordion.Body>
          Please call us at (518)587-8885 if: If you are experiencing
          intolerable pain. If your temporary filling becomes mostly or
          completely dislodged. If the office is not open, please leave a
          message. The answering machine is checked on a regular basis, and
          someone will return your call promptly.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function FillingsAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dental Fillings</Accordion.Header>
        <Accordion.Body>
          A dental filling is a way to repair a weak or decayed portion of a
          tooth. A dentist will recommend a filling if he finds a cavity.
          Cavities are decayed areas of the tooth, and will not repair
          themselves. They will only get larger with time. Unresolved decay will
          eventually result in a root canal, or an extraction. There are several
          materials which may be used to fill a tooth. The location of the
          filling, the size of the decay and patient preference are all factors
          in deciding which material should be used.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Composite Fillings</Accordion.Header>
        <Accordion.Body>
          Composite fillings are the ‘white’ fillings. These are used in
          restoration of the front teeth. Most often, we will also choose to use
          composites in back teeth as well, as they are more aesthetically
          pleasing. They were once considered less durable than amalgam or
          “silver” fillings, but have steadily improved to the point of being a
          reasonable choice for most fillings. A few insurance companies,
          however, will hesitate to pay the slightly higher fee for a composite
          filling on a back tooth. In this case, you will be offered a choice to
          pay the remaining balance of the fee, or have an amalgam filling.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Amalgam Fillings</Accordion.Header>
        <Accordion.Body>
          Amalgam fillings are the time tested standard of fillings for back
          teeth. They are a mixture of different materials that when brought
          together make a durable, inexpensive filling medium. They are,
          however, silver in color. Although this is often unnoticeable to
          others, it is a source of embarrassment for some patients. Amalgam
          fillings also contain a small amount of mercury. This has been a
          source of concern for many patients. The amount of mercury exposure,
          however, is well below what would be harmful to humans. Furthermore,
          removing old amalgam fillings because of concerns for mercury
          poisoning is not recommended, as the highest levels of exposure are on
          the day the filling is placed, and the day it is removed.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Post-Op for Dental Fillings</Accordion.Header>
        <Accordion.Body>
          It is most likely that you will be numb for an hour or two after your
          filling. Please avoid eating until the numbness subsides to avoid
          chewing or biting your lips and tongue. If you have had a white
          filling, you will be able to chew with that tooth as soon as the
          numbness wears off. Silver fillings, however, take time to harden
          completely. To avoid damage to the filling, please avoid chewing on
          that area for 24 hours. You may experience heat sensitivity for a few
          days, and cold sensitivity for as long as 8 weeks especially if the
          filling was large. You might also have some sensitivity to chewing.
          Any sensitivity you experience should gradually decrease over time.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>When to Call Us</Accordion.Header>
        <Accordion.Body>
          Please call us at (518)587-8885 if: You notice swelling, either of the
          face or in the mouth. You have heat sensitivity that lasts more than a
          few weeks. You have cold sensitivity that lingers on for many minutes.
          You have spontaneous pain that occurs for no apparent reason. The
          filling becomes dislodged. If the office is not open, please leave a
          message. The answering machine is checked on a regular basis, and
          someone will return your call promptly.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function CrownsAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Crowns</Accordion.Header>
        <Accordion.Body>
          A crown is a restoration that completely encases a tooth. These
          restorations are used to strengthen the tooth, and can also improve
          appearance and alignment. A crown may also be referred to as a ‘cap’
          or ‘porcelain jacket’. Dr. Green may recommend a crown for you if you
          need to replace a large or weak filling, if the tooth is cracked or
          broken, or if your tooth has been weakened by root canal therapy. Your
          crown may be made of metal, which is the strongest choice, or
          porcelain, which is the most attractive choice. You may also opt to
          have a porcelain fused to metal crown, which offers a strong but
          attractive option. If you need a crown, Dr. Green will advise you as
          to which is the best choice for your situation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Veneers</Accordion.Header>
        <Accordion.Body>
          A veneer is similar to a porcelain crown. However, veneers are used
          for cosmetic purposes only. Rather than encase the entire tooth, they
          cover only the front portion of a tooth.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Bridges</Accordion.Header>
        <Accordion.Body>
          A bridge can be used to replace a missing or extracted tooth. If you
          have a missing tooth, it is sometimes possible to crown the nearest
          teeth and connect those crowns with a fake tooth, called an abutment.
          This improves both the appearance and chewing surface of an area with
          missing teeth. Unfortunately, this is not the right solution for
          everyone. If if the gap is too large, or the surrounding teeth do not
          have adequate bone support, a bridge may fail. Also, the surrounding
          teeth must be shaped to accept crowns. If these teeth are healthy and
          have not had previous dental work, you may want to consider an implant
          rather than a bridge.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Implants</Accordion.Header>
        <Accordion.Body>
          An implant is often a good solution for a missing tooth. Although
          relatively new technology- dental implants were first approved for use
          in the United States in 1982- implants have become a fairly common and
          successful solution for tooth replacement. Implants involve the
          placing of an artificial titanium or titanium alloy ‘root’ in the
          jawbone. You must have adequate healthy bone tissue to support the
          implant. For this process, we would refer you to a local periodontist
          or oral surgeon. Once the implant has adequately fused with the bone,
          you would return to our office for the placement of an implant crown.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Post Op instructions for Crown and Bridge
        </Accordion.Header>
        <Accordion.Body>
          Be mindful of biting or chewing your lips and tongue until the
          anesthetic wears off, as you will be numb. You will most likely have a
          temporary crown or bridge. Please avoid hard or sticky foods, avoid
          chewing on the temporary crown and avoid flossing directly around the
          crown. If the gum tissue around the temporary crown is irritated or
          swollen for a day or two after placement, rinse with warm salt water.
          You may notice an increased sensitivity to hot and cold temperatures,
          especially with the temporary crown. Sensitivity should decrease over
          time with the permanent crown. You may notice some pain and tenderness
          from the tooth. While some tenderness is to be expected, if the pain
          increases or becomes severe, please let us know.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>When to Call Us</Accordion.Header>
        <Accordion.Body>
          Please call us at (518)587-8885 if: You are experiencing severe or
          increasing pain. When the numbness wears off, you feel that your teeth
          do not feel as if they come together properly. Your crown or temporary
          crown becomes dislodged. If the office is not open, please leave a
          message. The answering machine is checked on a regular basis, and
          someone will return your call promptly.{" "}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function ProstheticsAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dentures</Accordion.Header>
        <Accordion.Body>
          A denture is a removable appliance, meant to replace your teeth if
          they are missing or decayed to the point that they can not be
          salvaged. A denture can help replace the function of your natural
          teeth, allowing you to maintain adequate nutrition and continue to
          consume the foods you’ve always enjoyed. It can also improve your
          appearance, not only by giving you a beautiful smile, but also by
          filling out your face and profile. Dentures can be placed in a number
          of ways. Most common is the conventional form of denture, in which all
          decayed and broken teeth are removed 8-12 weeks prior to the making of
          the denture. This allows the bone and oral tissues to heal, and
          results in a nice fitting denture. However, it also leaves you with no
          teeth for several weeks. Another type of denture is the immediate
          denture. Immediate dentures are placed on the day that your teeth are
          extracted. This is appealing in that you are not left without teeth
          for any length of time. However, as inflamed tissues heal and shrink
          the denture may need to be relined to make it fit properly.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Partials</Accordion.Header>
        <Accordion.Body>
          Partials are similar to dentures in that they are removable appliances
          meant to replace missing teeth. They are formed around a pink or metal
          base, and they clasp on to existing teeth. This often gives them a
          more solid feel. Partials can also be useful to keep existing teeth
          from shifting from their existing position.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Post Op and Care of Dentures and Partials
        </Accordion.Header>
        <Accordion.Body>
          Wear your partial/denture every day or your remaining teeth and oral
          tissues will shift and change, resulting in a poorly fitting
          appliance. Dentures and partials will often feel like a ‘new shoe’
          when you first wear them. As you get use to the feel of them, some
          discomfort is normal. Speaking or yawning may be difficult in the
          beginning. The muscles of your mouth need to get use to holding the
          denture in place. You may notice an increase in saliva as your body
          gets use to your new appliance. Please brush your partials/dentures as
          you would your own teeth. Rinse them to remove loose food and debris
          before brushing with a soft brush. Don’t forget to clean the areas
          inside your mouth as well, as food and bacteria may build here and
          cause odor and infection. Remove your denture each night to allow your
          oral tissues to rest. Store them in a safe place, covered in water or
          an approved denture cleaner. If your partials/dentures are allowed to
          dry out, they may warp. If you must use and adhesive or cleaner, look
          for one with the ADA seal of approval.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>When to Call Us</Accordion.Header>
        <Accordion.Body>
          Please call us at (518)587-8885 if: Your partial/denture is not
          fitting well and needs adjustment. Your partial/denture is broken. You
          have any questions. If the office is not open, please leave a message.
          The answering machine is checked on a regular basis, and someone will
          return your call promptly.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function PreventionAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cleanings</Accordion.Header>
        <Accordion.Body>
          We often hear the term ‘it’s just a cleaning’ when our patients arrive
          for their semi-annual appointments- but at Dr. Green’s office we feel
          that cleanings are the cornerstone to your dental care. At your
          cleaning appointment, we will update your medical history, take any
          necessary x-rays, assess your dental health, and remove the build up
          of harmful stain and bacteria from your teeth and gums. We’ll also
          assess your brushing habits and give you instruction on how to work
          with us to improve your oral health. Our hygienists will be happy to
          explain each procedure and work very well as a team. We know each
          others strengths, and if we feel you’d be a good fit with one of our
          colleagues, we will try to place you with the personality that is the
          best fit for you. We believe that cleanings should be enjoyable, and
          we’ll do our best to make it a pleasant experience for you. Please
          remember, however, that you should visit us at least twice a year. If
          many years pass between cleanings we will work our hardest to ease you
          back into dental health, however it only makes things more difficult
          for all involved.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Fluoride</Accordion.Header>
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
          child’s teeth. After your child has had a fluoride varnish applied,
          you may notice that it is visible on their teeth immediately following
          the appointment. This is entirely normal, and will wear off within a
          few hours. They are allowed to eat and drink, but should avoid
          extremely hot, crunchy or sticky foods, such as nachos, hot chocolate
          and gum. Please do not allow them to brush their teeth for 6 hours
          following a fluoride treatment. The goal is to get the maximum
          fluoride benefit by leaving the varnish in place as long as possible.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Periodontal Care</Accordion.Header>
        <Accordion.Body>
          Oral health extends beyond fixing cavities and broken teeth.
          Periodontal care is the treatment of the gums and surrounding tissues
          of the teeth. Everyone has a normal level of bacteria living in their
          mouths- some of them harmful and some of them not. If left unchecked,
          these bacteria can flourish and can create acids that not only break
          down teeth and cause decay, but can break down the gum tissues and
          bone that support the teeth as well. Regular brushing and flossing at
          home is essential to controlling this bacteria. Regular visits to the
          hygienist are also an essential part of this process. Even with
          regular home care, bacteria can harden into ‘tartar’, which needs to
          be removed by a professional. Furthermore, if gums and bone begin to
          break down, ‘pockets’ can form in the gums which become more difficult
          to keep clean at home. Pockets become perfect areas for bacteria to
          grow and cause damage. Your hygienist can assess the periodontal
          health of your mouth. She may recommend more frequent visits, a change
          in brushing habits, or perhaps a visit to a gum specialist, called a
          periodontist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>X-Rays</Accordion.Header>
        <Accordion.Body>
          In order to effectively screen patients for dental disease and
          cavities, we prefer to take dental x-rays on a regular basis. Bitewing
          x-rays are the smaller, more frequent x-rays. These are done on a
          yearly basis, and are used to look for decay. Without bitewing x-rays,
          it is impossible for the doctor to detect decay between your molars
          until the decayed area is very large. Every 5 years we will also
          suggest a panorex x-ray. This is a larger film, and shows an overview
          of the patient’s entire jaw and mouth. This is useful in locating
          unerupted teeth, such as wisdom teeth, and tracking periodontal bone
          loss. A panorex is also useful for screening abnormalities in the
          underlying tissues. If you have a toothache, we may also ask to take a
          periapical x-ray. This is a film of a single tooth or area in which
          there is pain or discomfort. It is not the same as a bitewing, as it
          also shows the root of the offending tooth.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Sealants</Accordion.Header>
        <Accordion.Body>
          Sealants are a plastic coating that is applied to the biting surface
          of adult molars, often applied soon after the tooth has erupted. Back
          teeth often have deep fissures and grooves in them. These grooves are
          sometimes too small for even a toothbrush bristle to reach the bottom
          of, and therefore these teeth are quick to decay. Sealants fill the
          grooves. They are relatively easy and painless to apply, similar to
          ‘painting’ the top of the teeth.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Whitening</Accordion.Header>
        <Accordion.Body>
          Many people today are concerned with the color of their teeth. While
          tooth whitening is certainly not a necessary procedure, it is
          important that you are happy with your smile and your appearance.
          Fortunately, whitening products are readily available in many forms.
          While these products may tend to cause your teeth to be more
          sensitive, when used properly they are not harmful to your tooth
          structure and often produce satisfying results. At Dr. Green’s office,
          we do not do chairside whitening procedures. We have found that making
          custom bleaching trays for our patients is very effective and can be
          done for a much lower cost. If you are interested in whitening your
          teeth, please ask your hygienist about the process at your next
          cleaning appointment.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Mouthguards</Accordion.Header>
        <Accordion.Body>
          If you are involved in contact sports, a mouthguard is an essential
          part of your sports equipment. A mouthguard not only helps to shield
          your teeth from being broken, but it also protects your lips and
          tongue from being injured by your teeth. Studies show that an athlete
          is 60 times more likely to have a dental injury if they are not
          wearing a mouthguard. Mouthguards come in 3 basic forms. There are
          stock mouthguards, which are preformed and often a bit bulky. You can
          also purchase ‘boil and bite’ mouthguards, which are softened by
          boiling and then formed to the teeth by biting into them. However, the
          best fit and comfort is found in a custom made mouthguard. Let us know
          if you are interested in a custom made mouthguard.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>TMJ</Accordion.Header>
        <Accordion.Body>
          The term ‘TMJ’ stands for temporomandibular joint, which is the joint
          connecting our lower jawbone to our skull. This is something we all
          have. However, the term ‘TMJ’ is often used when this joint begins to
          malfunction. This is often accompanied by clicking, popping or pain.
          Often TMJ problems stem from the clenching and grinding of teeth, or
          an activity which displaces the joint, such as violin playing. Only in
          extreme cases do we refer patients for surgical intervention of a TMJ
          problem. More often, the problem can be solved with the use of a night
          guard. A night guard is a thin plastic mouthguard which keeps teeth
          from contacting each other while the patient is asleep. This prevents
          clenching and grinding during the night, when clenching and grinding
          is often the worst.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
