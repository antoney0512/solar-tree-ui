import React from "react";
import "./App.css";

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroContent">
          <p className="tag">Solar Tree Cooling System</p>

          <h1>自發電太陽樹熱交換風道降溫系統</h1>

          <p className="subtitle">
            結合太陽能輔助供電概念、熱電致冷晶片、風道結構與散熱片設計，
            打造可應用於戶外休憩空間的局部降溫系統。
          </p>

          <div className="heroButtons">
            <a href="#result">查看成果數據</a>
            <a href="#system" className="secondary">
              了解系統架構
            </a>
          </div>
        </div>

        <div className="heroCard">
          <h3>實測降溫效果</h3>
          <div className="bigNumber">5°C</div>
          <p>入口 25°C → 出口 20°C</p>
        </div>
      </section>

      <section className="stats">
        <Stat title="晶片冷端" value="14°C" text="熱電致冷晶片冷端溫度" />
        <Stat title="晶片熱端" value="55°C" text="熱端排熱為後續改善重點" />
        <Stat title="散熱片設計" value="19片" text="依模擬與預測結果選用" />
        <Stat title="太陽能板配置" value="6片" text="3 串聯 2 並聯配置" />
      </section>

      <section className="section">
        <p className="sectionTag">Research Background</p>
        <h2>研究背景</h2>
        <p>
          近年戶外高溫問題逐漸明顯，公園、校園、休憩區與偏遠場域對局部降溫設備的需求提升。
          然而，部分戶外環境不易取得穩定市電，因此本研究以太陽能輔助供電為初步規劃方向，
          並結合熱電致冷技術與風道結構，建立一套具備戶外應用潛力的降溫系統。
        </p>
      </section>

      <section id="system" className="section darkBox">
        <p className="sectionTag">System Design</p>
        <h2>系統設計概念</h2>

        <div className="grid">
          <Feature
            title="太陽能供電規劃"
            text="估算太陽能板需求面積約 11.3 m²，規劃採用 6 片太陽能板，配置為 3 串聯 2 並聯。"
          />
          <Feature
            title="熱電致冷晶片"
            text="以熱電致冷晶片作為主要降溫來源，產生冷端吸熱與熱端放熱效果。"
          />
          <Feature
            title="風道結構"
            text="透過壓克力風道引導冷空氣流動，使降溫後的空氣能集中輸送至出口端。"
          />
          <Feature
            title="散熱片與風扇"
            text="搭配 19 片散熱片與冷熱端風扇，提高換熱效率並協助熱端排熱。"
          />
        </div>
      </section>

      <section className="section">
        <p className="sectionTag">Solar Power Planning</p>
        <h2>太陽能板配置</h2>
        <p>
          本研究估算系統所需太陽能板總面積約為 11.3 m²。依照單片太陽能板面積換算後，
          最終規劃採用 6 片太陽能板，並以 3 串聯 2 並聯方式配置。
          另外，依據臺中地區 6 至 9 月日照資料，估算夏季平均有效輻照度約為 550.67 W/m²，
          作為後續太陽能板實際輸出能力修正依據。
        </p>

        <div className="process">
          <div>11.3 m²</div>
          <div>6 片太陽能板</div>
          <div>3 串聯</div>
          <div>2 並聯</div>
          <div>550.67 W/m²</div>
        </div>
      </section>

      <section className="section">
        <p className="sectionTag">Simulation</p>
        <h2>COMSOL 模擬分析</h2>
        <p>
          本研究使用 COMSOL 進行熱流分析，建立風道與散熱片模型，
          並針對不同散熱片片數進行出口溫度比較。模擬結果顯示，
          隨著散熱片片數增加，出口溫度呈現下降趨勢，
          因此後續實體裝置選用 19 片散熱片作為設計依據。
        </p>

        <div className="process">
          <div>建立基礎模型</div>
          <div>加入鰭片結構</div>
          <div>比較片數差異</div>
          <div>網格測試</div>
          <div>選用 19 片</div>
        </div>
      </section>

      <section id="result" className="section result">
        <p className="sectionTag">Experimental Result</p>
        <h2>實體量測成果</h2>

        <div className="resultLayout">
          <div className="temperatureCard cold">
            <span>冷端</span>
            <strong>14°C</strong>
            <p>晶片冷端表面溫度</p>
          </div>

          <div className="temperatureCard outlet">
            <span>出口</span>
            <strong>20°C</strong>
            <p>風道出口溫度</p>
          </div>

          <div className="temperatureCard hot">
            <span>熱端</span>
            <strong>55°C</strong>
            <p>晶片熱端表面溫度</p>
          </div>
        </div>

        <p className="highlightText">
          實測結果顯示，當室溫約 25°C 時，風道出口溫度可降至約 20°C，
          代表本系統可達到約 5°C 的降溫效果，具備基本局部降溫能力。
        </p>
      </section>

      <section className="section warning">
        <p className="sectionTag">System Limitation</p>
        <h2>熱損失與系統限制</h2>
        <p>
          目前實測出口溫度與模擬預測值仍存在差異，主要原因包含熱端散熱不完全、
          晶片接觸熱阻、風道漏熱與實際風量衰減。後續可透過改善熱端散熱、
          增加多點溫度感測與實際風速量測，提高系統效率與驗證準確度。
        </p>
      </section>

      <section className="section">
        <p className="sectionTag">Future Work</p>
        <h2>結論與未來展望</h2>

        <div className="futureList">
          <div>整合太陽能板與儲能模組，完成自給式供電系統。</div>
          <div>改善熱端散熱設計，降低熱回流與熱端溫升影響。</div>
          <div>增加實際風量與多點溫度量測，提高實驗可信度。</div>
          <div>放大風道與降溫空間尺度，朝戶外太陽能樹應用發展。</div>
        </div>
      </section>
    </main>
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

function Feature({ title, text }) {
  return (
    <div className="featureCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}