import BannerPng from "../assets/Ibn al-Haytham.png";
import { motion } from "framer-motion";

const Banner= () => {
  return (
    <section className="bg-black">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }} 
          className="flex flex-col justify-center"
        >
          <div className="text-right md:text-right space-y-4 lg:max-w-[700px]" dir="rtl"> 
            <p className="text-gray-300">
              “الحق مطلوب لذاته، فليس يعني طالبه غير وجوده، ووجود الحق صعب، والطريق إليه وعر،
              والحقائق منغمسة في الشبهات، وحسن الظن بالعلماء في طباع جميع الناس، فالناظر في كتب العلماء
              إذا استرسل مع طبعه، وجعل غرضه فيهم ما ذكروه وغاية ما أوردوه، حصلت الحقائق عنده هي المعاني
              التي قصدوا لها والغايات التي أشاروا إليها، وما عم الله العلماء من الذلل ولا حمى علمهم من التقصير والخلل،
              ولو كان كذلك ما اختلف العلماء في شيء من العلوم ولا تفرقت آراؤهم في شيء من حقائق الأمور.
              <br />
              والوجود بخلاف ذلك، فطالب الحق ليس هو الناظر في كتب المتقدمين، المسترسل مع طبعه في حسن الظن بهم،
              بل طالب الحق هو المتهم لظنه فيهم المتوقف فيما يفهمه عنهم المتبع الحجة والبرهان،
              لا أقول القائل الذي هو إنسان، المخصوص في جبلته بضروب الخلل والنقصان،
              والواجب على الناظر في كتب العلوم إذا كان غرضه معرفة الحقائق، أن يجعل نفسه خصماً لكل ما يتصل به،
              ويجيل فكره في متنه وحواشيه، ويخصمه من جميع جهاته ونواحيه، ويتهم أيضاً نفسه عند خصمه،
              فلا يتحامل عليه ولا يتسمح فيه، فإنه إذا سلك هذه الطريقة انكشفت له الحقائق
              وظهر ما عساه وقع في كلام من تقدمه من التقصير والشبه.”
              <br />
              “ ابن الهيثم, الشكوك على بطلميوس
            “</p>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }} 
            src={BannerPng}
            className="w-full md:max-w-[700px] object-cover drop-shadow" 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
