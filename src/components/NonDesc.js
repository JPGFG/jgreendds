import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Nondescrimination() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Notice of Nondiscrimination
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notice of Nondiscrimination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            R. Jamie Green Family Dentistry complies with applicable Federal
            civil rights laws and does not discriminate on the basis of race, R.
            Jamie Green Family Dentistry does not exclude people or treat them
            differently because of race, color, national origin, age, R. Jamie
            Green Family Dentistry • Provides free aids and services to people
            with disabilities to communicate effectively with us, such as: ○
            Qualified sign language interpreters ○ Written information in other
            formats (large print, audio, accessible electronic formats) •
            Provides free language services to people whose primary language is
            not English, such as: ○ Qualified interpreters ○ Information written
            in other languages If you need these services, contact Cindy Kmetz
            by phone at (518)587-8885, option 2, or by email at
            cindy@jamiegreendds.com. If you believe that R. Jamie Green Family
            Dentistry has failed to provide these services or discriminated in
            another way on the basis of race, color, national origin, age,
            disability, or sex, you can file a grievance with the U.S.
            Department of Health and Human Services, Office for Civil Rights,
            electronically through the Office for Civil Rights Complaint Portal,
            available at https://ocrportal.hhs.gov/ocr/portal/lobby.jsf, or by
            mail or phone at: U.S. Department of Health and Human Services 200
            Independence Avenue, SW Room 509F, HHH Building Washington, D.C.
            20201 1-800-368-1019, 800-537-7697 (TDD) We will take reasonable
            steps to provide free-of-charge language assistance services to
            people who speak languages we are likely to hear in our practice and
            who don’t speak English well enough to talk to us about the dental
            care we are providing. Spanish: Tomaremos acciones razonables para
            proporcionar servicios de asistencia lingüística gratuitos a
            aquellas personas cuyo lenguaje escuchemos frecuentemente en nuestro
            consultorio y que no hablen un inglés lo suficientemente bueno como
            para hablar con nosotros sobre el servicio odontológico que
            suministramos. Chinese:
            我们将有序地做到提供免费的语言服务使我们能听懂英语不好的人向我们咨询有关牙齿护理
            Russian: Мы принимаем необходимые меры, чтобы предоставить
            бесплатные услуги переводчика для общения на языках, с которыми мы
            сталкиваемся в нашей практике с клиентами, которые не владеют
            английским языком достаточно, чтобы обсудить с нами
            стоматологическое обслуживание, которое мы предоставляем. French
            Creole (Haitian Creole): Nou pral pran mezi rezonab pou bay sèvis
            asistans lang gratis pou moun ki pale lang nou pagen ide deyo ak ki
            pa pale angle byen ase pou pale ak nou sou swen dantè nou ap bay.
            Korean: 저희는 적절한 조치를 통하여 언어 지원 서비스를 무료로 제공할
            것입니다. 다만, 실제로 저희에게 관심이 있는 언어를 쓰지만 저희 치아
            관리 서비스에 대해 의견을 줄 수 있을 만큼 영어로 의사소통이 원활하지
            않는 경우로 한정합니다 Italian: Adotteremo le misure ragionevoli per
            fornire servizi di assistenza linguistica gratuiti a coloro che
            parlano lingue che sentiamo spesso sul posto di lavoro e che non
            parlano inglese abbastanza bene da poter discutere della cura
            dentale che stiamo fornendo. Yiddish: מיר וועלן נעמן פאראנטווארליכע
            מיטלן צו געבן פרייע שפראך הילף באדינונגן צו מענשן וואס רעדן שפראכן
            וואס מיר מסתמא וועלן הערן אין אונזר פראקטיק און וואס רעדן ניט ענגליש
            גוט גענוג צו רעדן מיט אונז וועגן דענטל הילף Bengali: দ াঁতের পররচর্য
            র রিষতে আম তদর প্র্য রিস চল ক লীন র্ র ইংর জী ভ ষ ে কথ িলতিন, এিং আম
            তদর প্র্দত্ত পররতষি ে র্ র ভ তল ভ তি ইংর জী ভ ষ ে কথ িলতে প রতিন ন ,
            ে তদর জনয আমর রিন মতূলয ভ ষ র সহ েে প্র্দ ন কর র ক্ষেতে র্তথষ্ট দ
            রেত্বশীল পদতেপ গ্রহণ করতি । Polish: Będziemy podejmować stosowne
            kroki, by zapewnić bezpłatne usługi wsparcia językowego dla ludzi,
            którzy rozmawiają językami, które my chcielibyśmy słyszeć w naszym
            gabinecie i dla tych, którzy nie mówią po angielsku na tyle dobrze,
            aby rozmawiać z nami o opiece stomatologicznej, którą zapewniamy.
            Arabic: سوف نقوم باتخاذ خطوات معقولة من أجل توفير خدمات المساعدة
            اللغوية بدون تكلفة للأشخاص الذين يتحدثون لغات أخرى من المرجح أن
            نستمع إليها خلال ممارستنا والذين لا يتقنون تحدث الإنجليزية بشكل جيد
            يمكنهم من التحدث إلينا فيما يتعلق برعاية الأسنان التي نقدمها.
            French: Nous prendrons les mesures raisonnables pour fournir des
            services d’assistance linguistique gratuits pour les individus qui
            parlent des langues que nous sommes susceptibles d’entendre durant
            nos séances et qui ne parlent pas suffisamment bien l’anglais pour
            discuter avec nous concernant les soins dentaires que nous
            fournissons. Urdu: ہم ان لوگوں کو جو ہماری پيش کردہ زبان بولتے ہيں
            ليکن انگريز ی نہيں جانتے اور ہم سے ڈينٹل کير کے ليے بات کرتے ہيں مفت
            زبان دانی کی امداد کے ليے معقول اقدام اٹهائيں گے۔ Tagalog: Gagawin
            namin ang mga makatwirang hakbang para maibigay namin ng walang
            bayad ang mga tulong na serbisyo sa wika para sa mga taong
            nagsasalita ng mga wikang karaniwan naming naririnig sa aming
            pagsasagawa at sa mga hindi bihasa sa pagsasalita ng Ingles na
            sasangguni sa amin tungkol sa pangangalaga ng ngipin na ibinibigay
            namin. Greek: Θα λάβουμε όλα τα αναγκαία μέτρα ώστε να παρέχουμε
            υπηρεσίες γλωσσικής βοήθειας δωρεάν-χωρίς-χρέωση στους ανθρώπους
            εκείνους που είναι πιθανόν ότι θα μιλούν στη μητρική τους γλώσσα
            κατά τη διάρκεια της εξέτασης και οι οποίοι δεν θα μιλούν τα αγγλικά
            αρκετά καλά ώστε να συνεννοηθούν με εμάς για την οδοντιατρική
            φροντίδα που παρέχουμε. Albanian: Do të marrim hapa të arsyeshëm për
            të ofruar shërbime falas për asistencë gjuhësore për njerëzit që
            flasin gjuhë që ka të ngjarë të dëgjojmë në punën tone dhe që nuk
            flasin anglisht aq mire sa të flasin me ne për kujdesin dentar që
            ofrojmë.{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nondescrimination;
