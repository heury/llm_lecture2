import{H as e,St as t,T as n,b as r,bt as i,k as a,tt as o,w as s,x as c,y as l}from"./modules/shiki-3Rm-qUjE.js";import{nt as u,rt as d}from"./index-DguSuY3M.js";import{t as f}from"./slidev/default-Dk75HwXq.js";import{t as p}from"./slidev/VClicks-BJr0R5qn.js";var m={__name:`recent-llm-architectures.md__slidev_303`,setup(m){let{$slidev:h,$nav:g,$clicksContext:_,$clicks:v,$page:y,$renderContext:b,$frontmatter:x}=d();return _.setup(),(d,m)=>{let h=p;return e(),r(f,t(a(i(u)(i(x),302))),{default:o(()=>[m[1]||=l(`h1`,null,`Convolutional Mixing`,-1),m[2]||=l(`img`,{src:`https://substack-post-media.s3.amazonaws.com/public/images/ad6e9cf3-2427-4aca-8afc-74202ddf93c4_2048x1208.png`,class:`mx-auto max-w-full max-h-77`},null,-1),m[3]||=l(`p`,null,[s(`Compressed Q, K에 `),l(`strong`,null,`sequence-mixing`),s(`과 `),l(`strong`,null,`channel-mixing`),s(`를 순차적으로 convolution 적용.`)],-1),c(`
Convolution(합성곱)은 입력 데이터 위를 작은 필터(커널)가 슬라이딩하면서 주변 값들을 가중합하는 연산입니다.

1D 예시 (시퀀스 기준):
커널 크기가 3이라면, 각 위치에서 자기 자신 + 양옆 값을 가중합해서 새 값을 만듭니다.

입력:   [A] [B] [C] [D] [E]
              ↓
커널:   [w1, w2, w3]

출력 C' = w1·B + w2·C + w3·D
`),n(h,null,{default:o(()=>[...m[0]||=[l(`ul`,null,[l(`li`,null,[s(`압축된 Q/K에 `),l(`strong`,null,`local context`),s(` 부여 후 attention score 계산`)]),l(`li`,null,[l(`strong`,null,`V에는 미적용`),s(` — content 자체를 담당, attention score와 무관`)]),l(`li`,null,[s(`동일 압축률에서 `),l(`strong`,null,`CCA > MLA`),s(` 성능 (CCA paper, Oct 2025)`)])],-1)]]),_:1})]),_:1},16)}}};export{m as default};