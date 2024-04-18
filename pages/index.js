import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";
import HorizontalBar from "@/components/HorizontalBar";
import PieChart from "@/components/PieChart";



export default function Home() {
  return (
    <>
      
      <main className={`${styles.main}`}>
        <BarChart/>
        <HorizontalBar/>
        <PieChart/>
      </main>
    </>
  );
}