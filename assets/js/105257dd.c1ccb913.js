"use strict";(self.webpackChunkgopher_master_algol=self.webpackChunkgopher_master_algol||[]).push([[669],{5340:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>m,toc:()=>h});var i=e(4848),u=e(8453),r=e(1432);const o='package main\n\nimport "fmt"\n\n\nfunc countBits(num uint8) uint8 {\n\n\tvar count uint8 = 0\n\tfor num > 0 {\n\t\tif num & 1 > 0 {\n\t\t\tfmt.Printf("num & 1: %08b\\n", (num & 1))\n\t\t\tcount++\n\t\t}\n\t\tnum = num >> 1\n\t\tfmt.Printf("num >> 1: %08b\\n", num)\n\t}\n\treturn count\n}\n\nfunc countBits2(num uint8) uint8 {\n\tvar count uint8 = 0\n\tfmt.Printf("num: %08b\\n", num)\n\tfor num > 0 {\n\t\tfmt.Printf("num & (num - 1): %08b\\n", (num & (num - 1)))\n\t\tnum = num & (num - 1)\n\t\tcount++\n\t}\n\treturn count\n}\n\nfunc main() {\n\n\tnum := uint8(10) // Binary: 00001010\n\tfmt.Printf("Original number: %08b\\n", num)\n\tfmt.Printf("Number of 1\'s in bits: %d\\n", countBits(num))\n\n\tfmt.Printf("Number of 1\'s in bits: %d\\n", countBits2(num))\n\n}',s="Original number: 00001010\nnum >> 1: 00000101\nnum & 1: 00000001\nnum >> 1: 00000010\nnum >> 1: 00000001\nnum & 1: 00000001\nnum >> 1: 00000000\nNumber of 1's in bits: 2\n",a={title:"Count 1's in Bit"},c=void 0,m={id:"Bit basic/countBit/countbit",title:"Count 1's in Bit",description:"There are two ways to count the number of ones in a given number:",source:"@site/docs/01-Bit basic/09-countBit/countbit.mdx",sourceDirName:"01-Bit basic/09-countBit",slug:"/Bit basic/countBit/countbit",permalink:"/GopherMasterAlgol/Bit basic/countBit/countbit",draft:!1,unlisted:!1,editUrl:"https://github.com/yukendhiran/GopherMasterAlgol/docs/01-Bit basic/09-countBit/countbit.mdx",tags:[],version:"current",frontMatter:{title:"Count 1's in Bit"},sidebar:"tutorialSidebar",previous:{title:"BIT MAGIC",permalink:"/GopherMasterAlgol/Bit basic/bitmagic/bitmagic"},next:{title:"Odd or Even Check Using Bitwise AND",permalink:"/GopherMasterAlgol/Bit basic/oddeven/oddeven"}},l={},h=[];function b(n){const t={li:"li",p:"p",ul:"ul",...(0,u.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"There are two ways to count the number of ones in a given number:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The first approach involves using a bitwise AND operation to extract the last bit and check if it is equal to one. If it is, you can increment a counter. Then, you can right shift the number to move the bits and repeat the process until all ones have been counted."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The second approach involves performing an AND operation with num - 1 to remove the rightmost bit from the number. This process effectively removes all ones from the number, and the number of iterations required to do so will be the answer."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.A,{language:"go",children:o}),"\n",(0,i.jsx)(t.p,{children:"Output:"}),"\n",(0,i.jsx)(r.A,{language:"text",children:s})]})}function f(n={}){const{wrapper:t}={...(0,u.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(b,{...n})}):b(n)}}}]);