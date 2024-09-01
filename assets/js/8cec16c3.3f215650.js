"use strict";(self.webpackChunkgopher_master_algol=self.webpackChunkgopher_master_algol||[]).push([[3511],{7805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var i=t(4848),s=t(8453),a=t(1432);const l='package main\n\nimport (\n\t"fmt"\n\t"math"\n)\n\n// tsp -traveling-salesman-problem\nfunc tsp(disntance [][]int, setOfcities int, city int, n int ) int{\n\t\n\tif setOfcities == (1 << n) -1 {\n\t\treturn disntance[city][0]\n\t}\n\n\tvar ans int = math.MaxInt32\n\tfor i := 0; i < n; i++ {\n\t\tif (setOfcities & (1 << i)) == 0 {\n\t\t\tvar newAns = disntance[city][i] + tsp(disntance, setOfcities | (1 << i), i, n)\n\t\t\tif ans > newAns {\n\t\t\t\tans = newAns\n\t\t\t}\n\t\t}\n\t}\n\treturn ans\n\n}\n\nfunc main() {\n\tgraph := [][]int{\n\t\t{0, 10, 15, 20}, \n\t\t{10, 0, 35, 25}, \n\t\t{15, 35, 0, 30},\n\t\t{20, 25, 30, 0},\n\t}\n\n\tfmt.Println(tsp(graph, 1, 0, 4))\n}',r="80\n",c={title:"Traveling Salesman Problem (TSP) Using Bit Masking"},o=void 0,h={id:"Bit Problem/salesman/salesman",title:"Traveling Salesman Problem (TSP) Using Bit Masking",description:"The Traveling Salesman Problem (TSP) is a well-known algorithmic challenge in computer science. Given a set of cities and the distances between them, the goal is to find the shortest route that visits each city exactly once and returns to the starting point. This solution uses dynamic programming with bit masking to efficiently solve the problem.",source:"@site/docs/02-Bit Problem/03-salesman/salesman.mdx",sourceDirName:"02-Bit Problem/03-salesman",slug:"/Bit Problem/salesman/salesman",permalink:"/GopherMasterAlgol/Bit Problem/salesman/salesman",draft:!1,unlisted:!1,editUrl:"https://github.com/yukendhiran/GopherMasterAlgol/docs/02-Bit Problem/03-salesman/salesman.mdx",tags:[],version:"current",frontMatter:{title:"Traveling Salesman Problem (TSP) Using Bit Masking"},sidebar:"tutorialSidebar",previous:{title:"Subset for Given String",permalink:"/GopherMasterAlgol/Bit Problem/subsets/subset"},next:{title:"Exponentiation",permalink:"/GopherMasterAlgol/category/exponentiation"}},d={},m=[{value:"Explanation",id:"explanation",level:2},{value:"Function Parameters",id:"function-parameters",level:3},{value:"Base Case",id:"base-case",level:3},{value:"Recursive Case",id:"recursive-case",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Traveling Salesman Problem (TSP) is a well-known algorithmic challenge in computer science. Given a set of cities and the distances between them, the goal is to find the shortest route that visits each city exactly once and returns to the starting point. This solution uses dynamic programming with bit masking to efficiently solve the problem."}),"\n",(0,i.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"tsp"})," function solves the Traveling Salesman Problem using a recursive approach with bit masking. Here is a step-by-step explanation:"]}),"\n",(0,i.jsx)(n.h3,{id:"function-parameters",children:"Function Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"distance [][]int"}),": A 2D array representing the distances between cities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setOfCities int"}),": A bitmask representing the set of cities that have been visited."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"city int"}),": The current city."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"n int"}),": The total number of cities."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"base-case",children:"Base Case"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"if setOfCities == (1<<n)-1"}),": Checks if all cities have been visited. The bitmask ",(0,i.jsx)(n.code,{children:"(1<<n)-1"})," has all bits set to 1, indicating that all cities are included in the set of visited cities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"return distance[city][0]"}),": If all cities have been visited, return the distance from the current city back to the starting city (0)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"recursive-case",children:"Recursive Case"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"var ans int = math.MaxInt32"}),": Initialize the minimum cost (",(0,i.jsx)(n.code,{children:"ans"}),") to a large value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"for i := 0; i < n; i++"}),": Loop through all cities.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"if (setOfCities & (1 << i)) == 0"}),": Check if the city ",(0,i.jsx)(n.code,{children:"i"})," has not been visited.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"var newAns = distance[city][i] + tsp(distance, setOfCities|(1<<i), i, n)"}),": Calculate the cost of visiting city ",(0,i.jsx)(n.code,{children:"i"})," and recursively solve the problem for the remaining cities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"if ans > newAns { ans = newAns }"}),": Update the minimum cost if a cheaper route is found."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.A,{language:"go",children:l}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(a.A,{language:"text",children:r})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);