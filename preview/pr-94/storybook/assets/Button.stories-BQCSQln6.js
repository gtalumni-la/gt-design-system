import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{v as V}from"./v4-CtRu48qb.js";import{r as Y}from"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const{addons:$}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:U}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:I}=__STORYBOOK_MODULE_GLOBAL__;var J=Object.defineProperty,q=(t,r)=>{for(var s in r)J(t,s,{get:r[s],enumerable:!0})},H="storybook/actions",Q=`${H}/action-event`,X={depth:10,clearOnStoryChange:!0,limit:50},G=(t,r)=>{let s=Object.getPrototypeOf(t);return!s||r(s)?s:G(s,r)},Z=t=>!!(typeof t=="object"&&t&&G(t,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof t.persist=="function"),ee=t=>{if(Z(t)){let r=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));r.persist();let s=Object.getOwnPropertyDescriptor(r,"view"),a=s?.value;return typeof a=="object"&&a?.constructor.name==="Window"&&Object.defineProperty(r,"view",{...s,value:Object.create(a.constructor.prototype)}),r}return t},te=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?V():Date.now().toString(36)+Math.random().toString(36).substring(2);function d(t,r={}){let s={...X,...r},a=function(...i){if(r.implicit){let F=("__STORYBOOK_PREVIEW__"in I?I.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(F){let u=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,L=new U({phase:F.phase,name:t,deprecated:u});if(u)console.warn(L);else throw L}}let o=$.getChannel(),l=te(),c=5,p=i.map(ee),E=i.length>1?p:p[0],K={id:l,count:0,data:{name:t,args:E},options:{...s,maxDepth:c+(s.depth||3),allowFunction:s.allowFunction||!1}};o.emit(Q,K)};return a.isAction=!0,a.implicit=r.implicit,a}const{definePreview:ve}=__STORYBOOK_MODULE_PREVIEW_API__,{global:D}=__STORYBOOK_MODULE_GLOBAL__;var re={};q(re,{argsEnhancers:()=>ae,loaders:()=>ie});var N=(t,r)=>typeof r[t]>"u"&&!(t in r),ne=t=>{let{initialArgs:r,argTypes:s,id:a,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!s)return{};let o=new RegExp(i.argTypesRegex);return Object.entries(s).filter(([l])=>!!o.test(l)).reduce((l,[c,p])=>(N(c,r)&&(l[c]=d(c,{implicit:!0,id:a})),l),{})},se=t=>{let{initialArgs:r,argTypes:s,parameters:{actions:a}}=t;return a?.disable||!s?{}:Object.entries(s).filter(([i,o])=>!!o.action).reduce((i,[o,l])=>(N(o,r)&&(i[o]=d(typeof l.action=="string"?l.action:o)),i),{})},ae=[se,ne],W=!1,oe=t=>{let{parameters:{actions:r}}=t;if(!r?.disable&&!W&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in D&&typeof D.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let s=D.__STORYBOOK_TEST_ON_MOCK_CALL__;s((a,i)=>{let o=a.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>o.startsWith(l)))&&d(o)(i)}),W=!0}},ie=[oe];const z="#B3A369",le="#003057",k="#FFFFFF",ce="0.5rem",M="0.75rem",P="1rem",de="1.5rem",pe="0.875rem",ue="1rem",me="1.125rem",n=({children:t,variant:r="primary",size:s="md",disabled:a=!1,type:i="button",...o})=>{const l={display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit",fontWeight:"500",backgroundColor:"transparent",borderRadius:"6px",cursor:a?"not-allowed":"pointer",transition:"all 0.2s ease-in-out",textDecoration:"none",opacity:a?.5:1},c={primary:{backgroundColor:z,color:k,border:"none"},secondary:{backgroundColor:le,color:k,border:"none"},outline:{backgroundColor:"transparent",color:z,border:`2px solid ${z}`}},p={sm:{padding:`${ce} ${M}`,fontSize:pe},md:{padding:`${M} ${P}`,fontSize:ue},lg:{padding:`${P} ${de}`,fontSize:me}},E={...l,...c[r],...p[s]};return e.jsx("button",{style:E,disabled:a,type:i,...o,children:t})},fe={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"The Button component is a fundamental interactive element in the GT Design System. It supports multiple variants, sizes, and states to cover various use cases across GT Alumni applications."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"],description:"The visual style variant of the button"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"The content of the button"}},args:{onClick:d("click"),onKeyDown:d("keydown"),onKeyUp:d("keyup")}},m={args:{variant:"primary",children:"Button"}},y={args:{variant:"secondary",children:"Button"}},g={args:{variant:"outline",children:"Button"}},h={args:{size:"sm",children:"Small Button"}},x={args:{size:"md",children:"Medium Button"}},v={args:{size:"lg",children:"Large Button"}},f={args:{disabled:!0,children:"Disabled Button"}},B={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"📧"}),"Send Email"]})}},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(n,{variant:"primary",children:"Primary"}),e.jsx(n,{variant:"secondary",children:"Secondary"}),e.jsx(n,{variant:"outline",children:"Outline"})]}),parameters:{docs:{description:{story:"All button variants displayed together for comparison."}}}},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{size:"sm",children:"Small"}),e.jsx(n,{size:"md",children:"Medium"}),e.jsx(n,{size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"All button sizes displayed together for comparison."}}}},_={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(n,{variant:"primary",type:"submit",children:"Save Changes"}),e.jsx(n,{variant:"outline",type:"button",children:"Cancel"}),e.jsx(n,{variant:"secondary",type:"button",children:"Save Draft"})]}),parameters:{docs:{description:{story:"Common form action buttons showing primary, secondary, and cancel actions."}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(n,{variant:"primary",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"→"}),"Next Step"]})}),e.jsx(n,{variant:"outline",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"←"}),"Previous"]})}),e.jsx(n,{variant:"secondary",children:"Skip for Now"})]}),parameters:{docs:{description:{story:"Navigation buttons for multi-step processes with directional icons."}}}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(n,{size:"lg",variant:"primary",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"🎓"}),"Join GT Alumni"]})}),e.jsx(n,{variant:"outline",children:"Learn More"})]}),parameters:{docs:{description:{story:"Call-to-action buttons with primary action and secondary learn more option."}}}},O={render:()=>{const[t,r]=Y.useState(!1),s=()=>{r(!0),setTimeout(()=>r(!1),2e3)};return e.jsx(n,{variant:"primary",disabled:t,onClick:s,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px",animation:"spin 1s linear infinite"},children:"⟳"}),"Loading..."]}):"Submit Form"})},parameters:{docs:{description:{story:"Button with loading state showing how to handle async actions."}}}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"300px"},children:[e.jsx(n,{style:{width:"100%"},variant:"primary",children:"Full Width Button"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(n,{style:{flex:1},variant:"secondary",children:"Flexible"}),e.jsx(n,{style:{flex:1},variant:"outline",children:"Buttons"})]})]}),parameters:{docs:{description:{story:"Responsive button layouts for mobile-friendly designs."}}}},A={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{variant:"primary",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"💾"}),"Save"]})}),e.jsx(n,{variant:"secondary",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"✏️"}),"Edit"]})}),e.jsx(n,{variant:"outline",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"🗑️"}),"Delete"]})}),e.jsx(n,{variant:"outline",size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"📤"}),"Share"]})})]}),parameters:{docs:{description:{story:"Common action buttons with icons for typical CRUD operations."}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",border:"1px solid #e5e5e5",borderRadius:"6px",overflow:"hidden"},children:[e.jsx(n,{variant:"outline",style:{borderRadius:"0",borderRight:"none"},children:"Day"}),e.jsx(n,{variant:"primary",style:{borderRadius:"0",borderRight:"none"},children:"Week"}),e.jsx(n,{variant:"outline",style:{borderRadius:"0"},children:"Month"})]}),parameters:{docs:{description:{story:"Button group pattern for toggle selections like view modes."}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{variant:"primary","aria-label":"Close dialog window",children:"✕"}),e.jsx(n,{variant:"secondary","aria-describedby":"save-help",children:"Save Document"}),e.jsx("div",{id:"save-help",style:{fontSize:"14px",color:"#666"},children:"This will save your changes permanently"}),e.jsx(n,{variant:"outline","aria-expanded":"false","aria-haspopup":"true",children:"More Options ▾"})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and states."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Button'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span style={{
        marginRight: '8px'
      }}>📧</span>
        Send Email
      </>
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
      <Button variant="outline" type="button">
        Cancel
      </Button>
      <Button variant="secondary" type="button">
        Save Draft
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common form action buttons showing primary, secondary, and cancel actions.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">
        <>
          <span style={{
          marginRight: '8px'
        }}>→</span>
          Next Step
        </>
      </Button>
      <Button variant="outline">
        <>
          <span style={{
          marginRight: '8px'
        }}>←</span>
          Previous
        </>
      </Button>
      <Button variant="secondary">Skip for Now</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Navigation buttons for multi-step processes with directional icons.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button size="lg" variant="primary">
        <>
          <span style={{
          marginRight: '8px'
        }}>🎓</span>
          Join GT Alumni
        </>
      </Button>
      <Button variant="outline">Learn More</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Call-to-action buttons with primary action and secondary learn more option.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <Button variant="primary" disabled={loading} onClick={handleClick}>
        {loading ? <>
            <span style={{
          marginRight: '8px',
          animation: 'spin 1s linear infinite'
        }}>
              ⟳
            </span>
            Loading...
          </> : 'Submit Form'}
      </Button>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with loading state showing how to handle async actions.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '300px'
  }}>
      <Button style={{
      width: '100%'
    }} variant="primary">
        Full Width Button
      </Button>
      <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Button style={{
        flex: 1
      }} variant="secondary">
          Flexible
        </Button>
        <Button style={{
        flex: 1
      }} variant="outline">
          Buttons
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive button layouts for mobile-friendly designs.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">
        <>
          <span style={{
          marginRight: '8px'
        }}>💾</span>
          Save
        </>
      </Button>
      <Button variant="secondary">
        <>
          <span style={{
          marginRight: '8px'
        }}>✏️</span>
          Edit
        </>
      </Button>
      <Button variant="outline">
        <>
          <span style={{
          marginRight: '8px'
        }}>🗑️</span>
          Delete
        </>
      </Button>
      <Button variant="outline" size="sm">
        <>
          <span style={{
          marginRight: '8px'
        }}>📤</span>
          Share
        </>
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common action buttons with icons for typical CRUD operations.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    overflow: 'hidden'
  }}>
      <Button variant="outline" style={{
      borderRadius: '0',
      borderRight: 'none'
    }}>
        Day
      </Button>
      <Button variant="primary" style={{
      borderRadius: '0',
      borderRight: 'none'
    }}>
        Week
      </Button>
      <Button variant="outline" style={{
      borderRadius: '0'
    }}>
        Month
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Button group pattern for toggle selections like view modes.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Button variant="primary" aria-label="Close dialog window">
        ✕
      </Button>
      <Button variant="secondary" aria-describedby="save-help">
        Save Document
      </Button>
      <div id="save-help" style={{
      fontSize: '14px',
      color: '#666'
    }}>
        This will save your changes permanently
      </div>
      <Button variant="outline" aria-expanded="false" aria-haspopup="true">
        More Options ▾
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, descriptions, and states.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const Be=["Primary","Secondary","Outline","Small","Medium","Large","Disabled","WithIcon","AllVariants","AllSizes","FormActions","NavigationActions","CallToAction","LoadingState","ResponsiveButtons","IconButtons","ButtonGroup","AccessibilityExamples"];export{C as AccessibilityExamples,S as AllSizes,b as AllVariants,T as ButtonGroup,R as CallToAction,f as Disabled,_ as FormActions,A as IconButtons,v as Large,O as LoadingState,x as Medium,j as NavigationActions,g as Outline,m as Primary,w as ResponsiveButtons,y as Secondary,h as Small,B as WithIcon,Be as __namedExportsOrder,fe as default};
