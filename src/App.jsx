import React, { useState } from "react";
import "./App.css";

const pages = [
  { id: "home", label: "首頁" },
  { id: "system", label: "系統架構" },
  { id: "simulation", label: "模擬分析" },
  { id: "charts", label: "圖表數據" },
  { id: "experiment", label: "實體驗證" },
  { id: "result", label: "成果討論" },
  { id: "future", label: "未來展望" },
];

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">Solar Tree Cooling</div>

        <div className="navLinks">
          {pages.map((page) => (
            <button
              key={page.id}
              className={activePage === page.id ? "activeNav" : ""}
              onClick={() => setActivePage(page.id)}
            >
              {page.label}
            </button>
          ))}
        </div>
      </nav>

      {activePage === "home" && <HomePage setActivePage={setActivePage} />}
      {activePage === "system" && <SystemPage />}
      {activePage === "simulation" && <SimulationPage />}
      {activePage === "charts" && <ChartDataPage />}
      {activePage === "experiment" && <ExperimentPage />}
      {activePage === "result" && <ResultPage />}
      {activePage === "future" && <FuturePage />}

      <footer className="footer">
        <p>國立勤益科技大學 智慧自動化工程系</p>
        <p>自發電太陽樹熱交換風道降溫系統之設計與驗證</p>
      </footer>
    </main>
  );
}

function HomePage({ setActivePage }) {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <p className="tag">Green Energy × Thermoelectric Cooling</p>

          <h1>自發電太陽樹熱交換風道降溫系統展示平台</h1>

          <p className="subtitle">
            本平台展示一套結合太陽能輔助供電概念、熱電致冷晶片、風道導流與散熱片設計的局部降溫系統。
            研究以理論計算、COMSOL 熱流模擬與縮小型實體量測，驗證系統在戶外休憩空間中的應用可行性。
          </p>

          <div className="heroButtons">
            <button onClick={() => setActivePage("result")}>查看成果數據</button>
            <button className="secondary" onClick={() => setActivePage("system")}>
              了解系統架構
            </button>
          </div>
        </div>

        <div className="heroPanel">
          <p className="panelLabel">核心成果</p>
          <div className="bigNumber">5°C</div>
          <p className="panelText">入口 25°C → 出口 20°C</p>

          <div className="miniData">
            <span>冷端 14°C</span>
            <span>熱端 55°C</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <Stat title="出口降溫" value="約 5°C" text="縮小型風道實測結果" />
        <Stat title="散熱片設計" value="19 片" text="依模擬與預測結果選用" />
        <Stat title="太陽能板規劃" value="6 片" text="3 串聯 2 並聯配置" />
        <Stat title="有效輻照度" value="550.67" text="W/m²，夏季估算基準" />
      </section>

      <section className="section">
        <p className="sectionTag">Platform Guide</p>
        <h2>平台導覽</h2>

        <p>
          首頁僅呈現專題核心成果與快速導覽。若要查看細節，可依照研究流程切換至不同分頁：
          系統架構說明硬體組成，模擬分析呈現 COMSOL 建模與散熱片參數分析，
          圖表數據整理預測模型，實體驗證說明裝置製作與量測方法，
          成果討論則整理實測數據、熱損失與系統限制。
        </p>

        <div className="homeGuide">
          <GuideCard
            title="系統架構"
            text="了解太陽能板、熱電晶片、風道、散熱片與風扇的整合方式。"
            onClick={() => setActivePage("system")}
          />
          <GuideCard
            title="模擬分析"
            text="查看 COMSOL 建模流程、邊界條件、網格測試與散熱片片數分析。"
            onClick={() => setActivePage("simulation")}
          />
          <GuideCard
            title="圖表數據"
            text="查看散熱片片數、Delta T、出口溫度與 17～20 片預測區間。"
            onClick={() => setActivePage("charts")}
          />
          <GuideCard
            title="實體驗證"
            text="查看縮小型風道裝置、DHT22 感測器與實驗量測流程。"
            onClick={() => setActivePage("experiment")}
          />
          <GuideCard
            title="成果討論"
            text="查看入口、出口、冷端、熱端溫度與熱損失分析。"
            onClick={() => setActivePage("result")}
          />
        </div>
      </section>
    </>
  );
}

function SystemPage() {
  return (
    <section className="section pageSection">
      <p className="sectionTag">System Architecture</p>
      <h2>系統架構與設計概念</h2>

      <p>
        本頁重點為系統組成。整體設計可分為能源端、冷卻端、導流端與散熱端四個部分。
        太陽能板作為後續戶外供電來源，熱電致冷晶片負責產生冷端與熱端溫差，
        風道用來集中輸送冷空氣，散熱片與風扇則用於提升冷端換熱與熱端排熱效率。
      </p>

      <div className="systemDiagram">
        <div className="diagramBlock solar">
          太陽能板
          <br />
          能源來源
        </div>
        <div className="diagramArrow">→</div>
        <div className="diagramBlock chip">
          熱電致冷晶片
          <br />
          冷熱分離
        </div>
        <div className="diagramArrow">→</div>
        <div className="diagramBlock duct">
          風道結構
          <br />
          冷空氣導流
        </div>
        <div className="diagramArrow">→</div>
        <div className="diagramBlock output">
          出口降溫
          <br />
          局部冷卻
        </div>
      </div>

      <div className="grid">
        <Feature
          number="01"
          title="太陽能供電規劃"
          text="依系統功率需求估算太陽能板總面積約 11.3 m²，最終規劃使用 6 片太陽能板，以 3 串聯 2 並聯方式配置。"
        />
        <Feature
          number="02"
          title="熱電致冷晶片"
          text="熱電致冷晶片通電後會形成冷端與熱端，冷端吸收空氣熱量，熱端排出廢熱，是整體降溫模組的核心元件。"
        />
        <Feature
          number="03"
          title="風道導流結構"
          text="風道以壓克力板製作，主要功能是限制氣流方向，使空氣集中通過冷端散熱區域後由出口送出。"
        />
        <Feature
          number="04"
          title="散熱片與風扇"
          text="冷端散熱片提升空氣與低溫表面的接觸面積，熱端風扇則協助排除廢熱，降低熱回流造成的效率下降。"
        />
      </div>
    </section>
  );
}

function SimulationPage() {
  return (
    <section className="section pageSection simulation">
      <p className="sectionTag">COMSOL Simulation</p>
      <h2>COMSOL 熱流模擬分析</h2>

      <p>
        本頁專注於模擬分析。研究使用 COMSOL 建立風道與散熱片模型，
        透過非等溫流耦合分析空氣流動與溫度場變化。
        模擬目的不是取代實驗，而是在實體製作前先判斷散熱片片數與出口溫度之間的趨勢。
      </p>

      <div className="dataTable">
        <div className="tableRow tableHead">
          <span>項目</span>
          <span>設定內容</span>
        </div>
        <div className="tableRow">
          <span>模擬型式</span>
          <span>穩態分析</span>
        </div>
        <div className="tableRow">
          <span>流動模型</span>
          <span>弱可壓縮流</span>
        </div>
        <div className="tableRow">
          <span>紊流模型</span>
          <span>Realizable k-ε</span>
        </div>
        <div className="tableRow">
          <span>入口條件</span>
          <span>法線流入速度 3 m/s</span>
        </div>
        <div className="tableRow">
          <span>出口條件</span>
          <span>壓力出口 0 Pa</span>
        </div>
        <div className="tableRow">
          <span>材料設定</span>
          <span>空氣、鋁／鋁合金</span>
        </div>
      </div>

      <div className="timeline">
        <Step title="建立基礎模型" text="先建立可收斂的風道模型，確認流場與熱傳設定可正常運算。" />
        <Step title="加入鰭片結構" text="加入散熱片幾何，觀察散熱片對出口溫度的影響。" />
        <Step title="網格測試" text="比較細化、較粗化與粗化三種網格條件下的出口溫度差異。" />
        <Step title="片數分析" text="比較不同散熱片片數對降溫效果的影響，尋找較適合的片數。" />
        <Step title="設計依據" text="綜合模擬趨勢與實體可行性後，選用 19 片散熱片。" />
      </div>

      <div className="notice">
        <strong>模擬結論：</strong>
        散熱片片數增加時，出口溫度呈現下降趨勢；但實際設計仍需考量風阻、安裝空間與加工可行性，
        因此最終選用 19 片作為實體設計依據。
      </div>
    </section>
  );
}

function ChartDataPage() {
  const chartData = [
    {
      title: "高溫條件 Delta T 預測",
      condition: "室溫 40°C，冷端 30°C",
      img: "/charts/deltaT_40_30.png",
      tag: "Delta T",
      points: "Nf = 10～20",
      result: "降溫幅度約 4.1～6.5°C",
      description:
        "此圖以散熱片片數 Nf 為變因，觀察高溫條件下的 Delta T 變化。結果顯示，隨著散熱片片數增加，降溫幅度逐漸提升，但在 17～20 片後趨於平緩，代表片數增加的效益開始遞減。",
    },
    {
      title: "室溫條件 Delta T 預測",
      condition: "室溫 25°C，冷端 15°C",
      img: "/charts/deltaT_25_15.png",
      tag: "Delta T",
      points: "Nf = 10～20",
      result: "降溫幅度約 2.1～3.2°C",
      description:
        "此圖呈現室溫條件下的 Delta T 變化。相較於高溫條件，室溫條件下的降溫幅度較小，但仍可看出散熱片片數增加會提升降溫效果，並在 18～19 片附近接近最佳區間。",
    },
    {
      title: "室溫條件出口溫度預測",
      condition: "室溫 25°C，冷端 15°C",
      img: "/charts/tout_25_15.png",
      tag: "Tout",
      points: "Nf = 10～20",
      result: "出口溫度約由 20.9°C 降至 18.6°C",
      description:
        "此圖直接呈現出口溫度 Tout 與散熱片片數之關係。當散熱片片數增加時，出口溫度下降，約在 18～19 片附近達到較低溫度。此結果可作為本研究選用 19 片散熱片的依據之一。",
    },
    {
      title: "高溫條件出口溫度預測",
      condition: "室溫 40°C，冷端 30°C",
      img: "/charts/tout_40_30.png",
      tag: "Tout",
      points: "Nf = 10～20",
      result: "出口溫度約由 37.9°C 降至 36.8°C",
      description:
        "此圖呈現高溫條件下的出口溫度預測。可以看出散熱片片數增加後，出口溫度逐漸下降；但 17～20 片之間的下降幅度趨緩，表示散熱片片數並非越多越有效，仍需考量風阻與實體配置限制。",
    },
  ];

  return (
    <section className="section pageSection chartPage">
      <p className="sectionTag">Chart Data</p>
      <h2>圖表數據與預測模型</h2>

      <p>
        本頁整理散熱片片數 Nf 與降溫效果之關係，包含 Delta T 預測圖與出口溫度 Tout 預測圖。
        圖中藍色圓點為原始模擬資料，藍色曲線為二次回歸模型，橘色叉號為 17～20 片散熱片的預測區間。
      </p>

      <div className="chartSummary">
        <div>
          <strong>10～16 片</strong>
          <span>原始模擬數據</span>
        </div>
        <div>
          <strong>17～20 片</strong>
          <span>模型預測區間</span>
        </div>
        <div>
          <strong>19 片</strong>
          <span>實體設計採用片數</span>
        </div>
        <div>
          <strong>二次回歸</strong>
          <span>預測出口溫度趨勢</span>
        </div>
      </div>

      <div className="chartGrid">
        {chartData.map((chart) => (
          <ChartCard key={chart.title} chart={chart} />
        ))}
      </div>

      <div className="notice">
        <strong>圖表結論：</strong>
        散熱片片數增加可提升降溫效果，但在 17～20 片區間後改善幅度逐漸變小。
        因此本研究選用 19 片散熱片，作為降溫效果與實體配置可行性之間的折衷設計。
      </div>
    </section>
  );
}

function ExperimentPage() {
  return (
    <section className="section pageSection">
      <p className="sectionTag">Prototype Experiment</p>
      <h2>實體裝置製作與量測方法</h2>

      <p>
        本頁說明實體驗證流程。由於太陽能板與儲能系統尚未完成整合，本階段先以電源供應器取代太陽能供電，
        製作縮小型風道裝置進行降溫驗證，確認熱電致冷晶片、散熱片與風道結構是否具備基本降溫能力。
      </p>

      <div className="experimentGrid">
        <div className="experimentCard">
          <h3>實體風道</h3>
          <p>風道尺寸為 3.5 × 5 × 25 cm，以壓克力板製作，用於集中導引冷空氣流向出口。</p>
        </div>
        <div className="experimentCard">
          <h3>熱電致冷晶片</h3>
          <p>使用 40 mm × 40 mm 熱電致冷晶片作為冷卻核心，透過電源供應器提供電力。</p>
        </div>
        <div className="experimentCard">
          <h3>風扇與散熱片</h3>
          <p>冷端與熱端皆配置風扇，搭配 19 片散熱片提升換熱效率並排出熱端廢熱。</p>
        </div>
        <div className="experimentCard">
          <h3>DHT22 感測器</h3>
          <p>使用 Arduino 搭配 DHT22 量測風道出口、冷端、熱端與風道內部溫度。</p>
        </div>
      </div>

      <div className="measureFlow">
        <div>確認晶片與風扇運作</div>
        <div>啟動電源供應器</div>
        <div>等待溫度穩定</div>
        <div>記錄多點溫度</div>
        <div>與模擬結果比較</div>
      </div>

      <div className="notice">
        <strong>實驗定位：</strong>
        本階段不是完整太陽能供電系統，而是先建立縮小型驗證平台。
        目的在於確認風道降溫模組本身是否可行，後續再整合太陽能板與儲能模組。
      </div>
    </section>
  );
}

function ResultPage() {
  return (
    <section className="section pageSection result">
      <p className="sectionTag">Result & Discussion</p>
      <h2>成果數據與熱損失討論</h2>

      <p>
        本頁聚焦實測成果與討論。量測結果顯示，當入口空氣約為 25°C 時，
        風道出口溫度可降至約 20°C，表示縮小型風道系統可達到約 5°C 的降溫效果。
      </p>

      <div className="resultLayout">
        <TemperatureCard type="cold" label="晶片冷端" value="14°C" text="熱電致冷晶片冷端表面溫度" />
        <TemperatureCard type="outlet" label="風道出口" value="20°C" text="降溫後出口空氣溫度" />
        <TemperatureCard type="hot" label="晶片熱端" value="55°C" text="熱端排熱為後續改善重點" />
      </div>

      <div className="comparisonBox">
        <div>
          <span>入口空氣</span>
          <strong>25°C</strong>
        </div>
        <div className="arrow">→</div>
        <div>
          <span>出口空氣</span>
          <strong>20°C</strong>
        </div>
        <div className="drop">
          降溫約 <strong>5°C</strong>
        </div>
      </div>

      <div className="limitGrid">
        <div>熱端散熱不完全</div>
        <div>晶片接觸熱阻</div>
        <div>風道漏熱</div>
        <div>實際風量衰減</div>
      </div>

      <p className="highlightText">
        雖然晶片冷端溫度可達約 14°C，但出口空氣溫度仍高於冷端溫度。
        主要原因可能包含熱端散熱不完全、散熱片接觸熱阻、風道漏熱與風扇實際風量下降。
        因此，後續若要提升降溫效果，應優先改善熱端散熱與風道密封性。
      </p>
    </section>
  );
}

function FuturePage() {
  return (
    <section className="section pageSection">
      <p className="sectionTag">Conclusion & Future Work</p>
      <h2>結論與未來展望</h2>

      <p>
        本研究完成熱電致冷風道降溫系統之理論計算、COMSOL 模擬分析與縮小型實體驗證。
        結果顯示，透過風道導流、散熱片配置與熱電致冷晶片，可使入口空氣由約 25°C 降至約 20°C，
        證明本系統具備初步局部降溫能力。
      </p>

      <div className="futureList">
        <div>
          <strong>整合太陽能板與儲能模組</strong>
          <span>完成真正可於戶外獨立運作的自給式供電系統。</span>
        </div>
        <div>
          <strong>改善熱端散熱設計</strong>
          <span>降低熱端溫升與熱回流，提高熱電致冷晶片的有效降溫能力。</span>
        </div>
        <div>
          <strong>增加多點溫度與風速量測</strong>
          <span>建立更完整的溫度分布資料，提高模擬與實測比較的可信度。</span>
        </div>
        <div>
          <strong>放大系統尺度</strong>
          <span>將縮小型風道模組放大，朝校園、公園與戶外休憩區應用發展。</span>
        </div>
      </div>

      <div className="notice">
        <strong>最終應用目標：</strong>
        將太陽能樹的遮蔭與發電功能，結合局部降溫模組，發展成可用於戶外休憩空間的自給式綠能降溫設備。
      </div>
    </section>
  );
}

function Stat({ title, value, text }) {
  return (
    <div className="statCard">
      <p>{title}</p>
      <strong>{value}</strong>
      <span>{text}</span>
    </div>
  );
}

function GuideCard({ title, text, onClick }) {
  return (
    <button className="guideCard" onClick={onClick}>
      <h3>{title}</h3>
      <p>{text}</p>
    </button>
  );
}

function Feature({ number, title, text }) {
  return (
    <div className="featureCard">
      <span className="featureNumber">{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ title, text }) {
  return (
    <div className="stepCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ChartCard({ chart }) {
  return (
    <article className="chartCard">
      <div className="chartCardHeader">
        <div>
          <span className="chartTag">{chart.tag}</span>
          <h3>{chart.title}</h3>
        </div>
        <p>{chart.condition}</p>
      </div>

      <img className="chartImage" src={chart.img} alt={chart.title} />

      <div className="chartInfo">
        <div>
          <span>分析範圍</span>
          <strong>{chart.points}</strong>
        </div>
        <div>
          <span>主要結果</span>
          <strong>{chart.result}</strong>
        </div>
      </div>

      <p className="chartDescription">{chart.description}</p>
    </article>
  );
}

function TemperatureCard({ type, label, value, text }) {
  return (
    <div className={`temperatureCard ${type}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{text}</p>
    </div>
  );
}