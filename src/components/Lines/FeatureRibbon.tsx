import Image   from "next/image";
import { motion } from "framer-motion";
import LinePng from "@/assets/line.png";
import { features } from "@/features/Home/constants/features";

/* ===== animasi ===== */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x:   0, transition: { duration: .6, ease: "easeOut" } },
};

type Variant = "arrow" | "minus";

/* ikon kecil ujung */
const IconTip = ({ variant }: { variant: Variant }) =>
  variant === "arrow" ? (
    <span className="block rotate-45 border-t-2 border-r-2 border-[#78FFA1] w-[6px] h-[6px]" />
  ) : (
    <span className="block border-t-2 w-[10px] border-[#78FFA1]" />
  );

/* satu item */
const FeatureItem = ({ label, variant }: { label: string; variant: Variant }) => (
  <motion.div
    variants={item}
    className="relative w-[300px] leading-tight"
  >
    {/* ===== 1. row teks + ikon ===== */}
    <div className="flex items-start justify-between">
      <span className="whitespace-pre-wrap">{label}</span>
      <IconTip variant={variant} />
    </div>

    {/* ===== 2. garis hijau di-bawah ===== */}
    <Image
      src={LinePng}
      alt=""
      fill={false}
      width={300}
      height={18}
      className="absolute left-0 -bottom-1 select-none"
      priority
    />
  </motion.div>
);

const FeatureRibbon = ({ data }: { data: typeof features }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.4 }}
    className="space-y-8 lg:block hidden"
  >
    {data.map((f) => (
      <FeatureItem key={f.label} {...f} />
    ))}
  </motion.div>
);

export default FeatureRibbon;
