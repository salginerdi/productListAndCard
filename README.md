# ProductListAndCard

Bu proje, bir restoranın tatlı menüsünden sipariş verme sürecini simüle eden, **React + TypeScript** tabanlı bir web
uygulamasıdır.  
Arayüz **Tailwind CSS** ve **Shadcn/UI** bileşenleriyle oluşturulmuştur.  
Veriler **JSON Server** aracılığıyla dinamik olarak çekilmektedir.  
Tasarım **tamamen responsive** olup, masaüstü, tablet ve mobil cihazlarda sorunsuz bir şekilde çalışır.

-

This project is a **React + TypeScript** based web application that simulates the process of ordering desserts from a restaurant menu.  
The interface is built using **Tailwind CSS** and **Shadcn/UI** components.  
Data is fetched dynamically through **JSON Server**.  
The design is **fully responsive**, ensuring seamless performance across desktop, tablet, and mobile devices.

---

productListAndCard, kullanıcıların bir restorandan tatlı siparişi verebildiği, React, TypeScript, Tailwind CSS,
Shadcn/UI ve JSON Server kullanılarak geliştirilmiş bir web uygulamasıdır. Tamamen responsive yapıdadır; masaüstü,
tablet ve mobil cihazlarda uyumlu çalışır.

-

productListAndCard is a web application where users can simulate ordering desserts from a restaurant menu.  
It is built using **React**, **TypeScript**, **Tailwind CSS**, **Shadcn/UI**, and **JSON Server**.  
The project is **fully responsive** and works perfectly on desktop, tablet, and mobile screens.


## Görsel / Preview

<img width="1681" height="1282" alt="picture1" src="https://github.com/user-attachments/assets/519aa18c-482c-402a-bfdd-130c42af850e" />
<img width="1675" height="1261" alt="picture2" src="https://github.com/user-attachments/assets/99bcc723-e8b4-4903-b8f2-87bbdf5ae58c" />

## Özellikler / Features

- React + TypeScript altyapısı
- Tailwind CSS ile esnek ve hızlı stil oluşturma
- Shadcn/UI bileşenleriyle modern arayüz
- JSON Server ile mock API
- Full responsive tasarım

-

- React + TypeScript architecture  
- Fast and flexible styling with Tailwind CSS  
- Modern UI components with Shadcn/UI  
- Mock API integration via JSON Server  
- Fully responsive design

## Kurulum / Installation

```bash

git clone https://github.com/<kullanici-adin>/productListAndCard.git
cd productListAndCard
npm install
npx json-server --watch db.json --port 3001
npm run dev
