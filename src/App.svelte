<script lang="ts">
  import Icon from '@iconify/svelte';
  import CheckBoxes from './component/CheckBoxes.svelte';
  import type { ManaColor } from './models/ManaColor';
  import Result from './component/Result.svelte';
  let selectedColors: ManaColor[] = [];
</script>

<div id="container">
<main>
  <Icon icon="arcticons:magic" height={128} width={128} color="#ff3e00" />
  <h1>What magic color?</h1>
  <p>マジック：ザ・ギャザリングでは、デッキに含まれるマナの組み合わせをその世界設定をなぞった名前で呼称します。</p>
  <p>このアプリでは、デッキに含まれる色を選択し、組み合わせの名前を確認することができます。</p>
  <CheckBoxes bind:selected={selectedColors} />
  <div id="result-container">
    <Result {selectedColors} />
  </div>
  
</main>
  <footer>
    <p>本Webページはファンコンテンツ・ポリシーに沿った非公式のファンコンテンツです。ウィザーズ社の認可/許諾は得ていません。題材の一部に、ウィザーズ・オブ・ザ・コースト社の財産を含んでいます。©Wizards of the Coast LLC.</p>
    <p>色の組み合わせについては、<a href="http://mtgwiki.com/wiki/%E8%89%B2%E3%81%AE%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B#3.E8.89.B2.E3.81.AE.E7.B5.84.E3.81.BF.E5.90.88.E3.82.8F.E3.81.9B">M:TG Wiki</a>を参考にさせていただきました。</p>
  </footer>
</div>


<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 16px;
    margin: 0 auto;
  }
  footer {
    position: absolute;
    text-align: center;
    bottom: 0;
    padding: 1em;
    font-size: 12px;
  }

  h1 {
    color: #ff3e00;
    font-size: 32px;
    font-weight: 100;
    margin: 0 0 16px;
  }

  p {
    margin: 8px 0;
    line-height: 1.35;
  }
  #container {
    min-height: 100vh;
    position: relative;
  }
  #result-container {
    margin-top: 16px;
  }
</style>
