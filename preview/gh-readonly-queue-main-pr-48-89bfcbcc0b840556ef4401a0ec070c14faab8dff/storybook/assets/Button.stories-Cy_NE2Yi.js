import{j as e}from"./jsx-runtime-D_zvdyIk.js";const u="#B3A369",F="#003057",g="#FFFFFF",A="0.5rem",y="0.75rem",h="1rem",C="1.5rem",W="0.875rem",L="1rem",T="1.125rem",r=({children:S,variant:x="primary",size:B="md",disabled:m=!1,type:v="button",...b})=>{const f={display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit",fontWeight:"500",backgroundColor:"transparent",borderRadius:"6px",cursor:m?"not-allowed":"pointer",transition:"all 0.2s ease-in-out",textDecoration:"none",opacity:m?.5:1},z={primary:{backgroundColor:u,color:g,border:"none"},secondary:{backgroundColor:F,color:g,border:"none"},outline:{backgroundColor:"transparent",color:u,border:`2px solid ${u}`}},j={sm:{padding:`${A} ${y}`,fontSize:W},md:{padding:`${y} ${h}`,fontSize:L},lg:{padding:`${h} ${C}`,fontSize:T}},G={...f,...z[x],...j[B]};return e.jsx("button",{style:G,disabled:m,type:v,...b,children:S})},k={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"The Button component is a fundamental interactive element in the GT Design System. It supports multiple variants, sizes, and states to cover various use cases across GT Alumni applications."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"],description:"The visual style variant of the button"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"The content of the button"}},args:{onClick:()=>console.log("Button clicked")}},t={args:{variant:"primary",children:"Button"}},n={args:{variant:"secondary",children:"Button"}},s={args:{variant:"outline",children:"Button"}},o={args:{size:"sm",children:"Small Button"}},a={args:{size:"md",children:"Medium Button"}},i={args:{size:"lg",children:"Large Button"}},c={args:{disabled:!0,children:"Disabled Button"}},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{marginRight:"8px"},children:"📧"}),"Send Email"]})}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"})]}),parameters:{docs:{description:{story:"All button variants displayed together for comparison."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"All button sizes displayed together for comparison."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Button'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Medium Button'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span style={{
        marginRight: '8px'
      }}>📧</span>
        Send Email
      </>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const D=["Primary","Secondary","Outline","Small","Medium","Large","Disabled","WithIcon","AllVariants","AllSizes"];export{p as AllSizes,d as AllVariants,c as Disabled,i as Large,a as Medium,s as Outline,t as Primary,n as Secondary,o as Small,l as WithIcon,D as __namedExportsOrder,k as default};
