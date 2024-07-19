"use strict";(self.webpackChunkgopher_master_algol=self.webpackChunkgopher_master_algol||[]).push([[315],{2285:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=i(4848),s=i(8453),r=i(1432);const d='package main\n\nimport "fmt"\n\nfunc main() {\n    var a int = 5\n    var b int = 8\n    \n    fmt.Println("Check if numbers are odd or even using bitwise AND:")\n    fmt.Printf("%d & 1 = %d -> %d is %s\\n", a, a & 1, a, checkOddEven(a))\n    fmt.Printf("%d & 1 = %d -> %d is %s\\n", b, b & 1, b, checkOddEven(b))\n}\n\nfunc checkOddEven(num int) string {\n    if num & 1 == 0 {\n        return "even"\n    }\n    return "odd"\n}',o="Check if numbers are odd or even using bitwise AND:\n5 & 1 = 1 -> 5 is odd\n8 & 1 = 0 -> 8 is even\n",a={title:"Odd or Even Check Using Bitwise AND"},c=void 0,l={id:"Bit basic/oddeven/oddeven",title:"Odd or Even Check Using Bitwise AND",description:"To determine if a number is odd or even, you can use the bitwise AND operator (&). By performing a bitwise AND between the number and 1, you can check the least significant bit (the last bit) of the number:",source:"@site/docs/01-Bit basic/10-oddeven/oddeven.mdx",sourceDirName:"01-Bit basic/10-oddeven",slug:"/Bit basic/oddeven/oddeven",permalink:"/GopherMasterAlgol/Bit basic/oddeven/oddeven",draft:!1,unlisted:!1,editUrl:"https://github.com/yukendhiran/GopherMasterAlgol/docs/01-Bit basic/10-oddeven/oddeven.mdx",tags:[],version:"current",frontMatter:{title:"Odd or Even Check Using Bitwise AND"},sidebar:"tutorialSidebar",previous:{title:"Count 1's in Bit",permalink:"/GopherMasterAlgol/Bit basic/countBit/countbit"},next:{title:"Power Of Two",permalink:"/GopherMasterAlgol/Bit basic/poweroftwo/poweroftwo"}},u={},h=[];function b(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To determine if a number is odd or even, you can use the bitwise AND operator (",(0,t.jsx)(n.code,{children:"&"}),"). By performing a bitwise AND between the number and ",(0,t.jsx)(n.code,{children:"1"}),", you can check the least significant bit (the last bit) of the number:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the result is ",(0,t.jsx)(n.code,{children:"0"}),", the number is even."]}),"\n",(0,t.jsxs)(n.li,{children:["If the result is ",(0,t.jsx)(n.code,{children:"1"}),", the number is odd."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is because the binary representation of even numbers always ends in ",(0,t.jsx)(n.code,{children:"0"}),", and the binary representation of odd numbers always ends in ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(r.A,{language:"go",children:d}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(r.A,{language:"text",children:o})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);