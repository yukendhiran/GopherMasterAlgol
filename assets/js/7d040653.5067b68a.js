"use strict";(self.webpackChunkgopher_master_algol=self.webpackChunkgopher_master_algol||[]).push([[756],{2441:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var t=i(4848),r=i(8453),s=i(1432);const o='package main\n\nimport "fmt"\n\nfunc main() {\n    var num uint8 = 42 // 00101010 in binary\n    fmt.Printf("%08b\\n", num) // prints 00101010\n\n    var complemented = ^num\n    fmt.Printf("%08b\\n", complemented)\n\t // prints 11010101\n\n\t var a int = 0\n\t var b uint8 = 0\n\t fmt.Println(^a)\n\t fmt.Println(^b)\n}',c="00101010\n11010101\n-1\n255\n",l={title:"NOT (`^`)"},d=void 0,a={id:"Bit basic/not/not",title:"NOT (`^`)",description:"While Go does not have a unary bitwise NOT (~) operator, it achieves the same functionality using the caret (^) as a bitwise complement operator. This operator flips each bit of its operand, providing bitwise negation functionality in Go.",source:"@site/docs/01-Bit basic/03-not/not.mdx",sourceDirName:"01-Bit basic/03-not",slug:"/Bit basic/not/not",permalink:"/GopherMasterAlgol/Bit basic/not/not",draft:!1,unlisted:!1,editUrl:"https://github.com/yukendhiran/GopherMasterAlgol/docs/01-Bit basic/03-not/not.mdx",tags:[],version:"current",frontMatter:{title:"NOT (`^`)"},sidebar:"tutorialSidebar",previous:{title:"OR (`|`)",permalink:"/GopherMasterAlgol/Bit basic/or/or"},next:{title:"XOR (`^`)",permalink:"/GopherMasterAlgol/Bit basic/xor/xor"}},h={},p=[{value:"For <code>int</code> type (<code>a</code>)",id:"for-int-type-a",level:3},{value:"For <code>uint8</code> type (<code>b</code>)",id:"for-uint8-type-b",level:3}];function u(e){const n={code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"While Go does not have a unary bitwise NOT (~) operator, it achieves the same functionality using the caret (^) as a bitwise complement operator. This operator flips each bit of its operand, providing bitwise negation functionality in Go."}),"\n",(0,t.jsx)(s.A,{language:"go",children:o}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(s.A,{language:"text",children:c}),"\n"," ","\n",(0,t.jsxs)(n.p,{children:["In Go, the bitwise complement operator ",(0,t.jsx)(n.code,{children:"^"})," flips each bit of its integer operand. This operation is based on the two's complement representation of integers."]}),"\n",(0,t.jsxs)(n.h3,{id:"for-int-type-a",children:["For ",(0,t.jsx)(n.code,{children:"int"})," type (",(0,t.jsx)(n.code,{children:"a"}),")"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"var a int = 0"})," initializes ",(0,t.jsx)(n.code,{children:"a"})," to ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In binary (assuming 32-bit integer): ",(0,t.jsx)(n.code,{children:"00000000 00000000 00000000 00000000"})]}),"\n",(0,t.jsxs)(n.li,{children:["Applying ",(0,t.jsx)(n.code,{children:"^a"})," (bitwise complement) flips each bit:\n** Resulting binary: ",(0,t.jsx)(n.code,{children:"11111111 11111111 11111111 11111111"}),"\n** The leftmost bit (most significant bit) is the sign bit.\n** ",(0,t.jsx)(n.code,{children:"0"})," indicates a non-negative number, and ",(0,t.jsx)(n.code,{children:"1"})," indicates a negative number.\n** Flipping all bits of ",(0,t.jsx)(n.code,{children:"00000000 00000000 00000000 00000000"})," results in ",(0,t.jsx)(n.code,{children:"11111111 11111111 11111111 11111111"}),", which represents ",(0,t.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Therefore, ",(0,t.jsx)(n.code,{children:"fmt.Println(^a)"})," outputs ",(0,t.jsx)(n.code,{children:"-1"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"for-uint8-type-b",children:["For ",(0,t.jsx)(n.code,{children:"uint8"})," type (",(0,t.jsx)(n.code,{children:"b"}),")"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"var b uint8 = 0"})," initializes ",(0,t.jsx)(n.code,{children:"b"})," to ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uint8"})," is an unsigned 8-bit integer ranging from ",(0,t.jsx)(n.code,{children:"0"})," to ",(0,t.jsx)(n.code,{children:"255"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In binary (8-bit): ",(0,t.jsx)(n.code,{children:"00000000"})]}),"\n",(0,t.jsxs)(n.li,{children:["Applying ",(0,t.jsx)(n.code,{children:"^b"})," (bitwise complement) flips each bit:\n** Resulting binary: ",(0,t.jsx)(n.code,{children:"11111111"}),"\n** In unsigned interpretation, ",(0,t.jsx)(n.code,{children:"11111111"})," represents ",(0,t.jsx)(n.code,{children:"255"})," in decimal."]}),"\n",(0,t.jsxs)(n.li,{children:["Therefore, ",(0,t.jsx)(n.code,{children:"fmt.Println(^b)"})," outputs ",(0,t.jsx)(n.code,{children:"255"}),"."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);