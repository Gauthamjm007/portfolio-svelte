import React from "react";
import { ReactLogo,Python } from "@styled-icons/boxicons-logos";
import { JsSquare ,Sass} from "@styled-icons/fa-brands";
import {
  Mysql,
  Postgresql,
  Typescript,
  Cypress,
  Django,
  Redis,
  Vite,
  Graphql,
} from "@styled-icons/simple-icons";

import { ShadowContainer } from "./styles";

function IconCard(props) {
  const { dropShadowColor, icon, title } = props;
  return (
    <div className="w-min p-4">
      <ShadowContainer
        className="rounded-full bg-gray-100 w-min mx-auto"
        color={dropShadowColor}
      >
        {icon}
      </ShadowContainer>
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <>
    <div class="pl-8 ml-8 flex">
    <h1 className="text-3xl font-semibold leading-tight">
              Skills
    </h1>
    </div>
    <div class="p-2 ml-8 flex">
      <IconCard
        dropShadowColor="#3074bf"
        icon={
          <Typescript className="h-20 w-20 p-5 hover:text-ts text-night hover:scale-105 transform duration-200" />
        }
        title="Typescript"
      />
      <IconCard
        dropShadowColor="#efd819"
        icon={
          <JsSquare className="h-20 w-20 p-4 hover:text-js  text-night hover:scale-105 transform duration-200" />
        }
        title="JavaScript"
      />
      <IconCard
        dropShadowColor="#61dafb"
        icon={
          <ReactLogo className="h-20 w-20 p-3 hover:text-react  text-night hover:scale-105 transform duration-200" />
        }
        title="React"
      />
      <IconCard
        dropShadowColor="#fde68a"
        icon={
          <Vite className="h-20 w-20 p-4 hover:text-yellow-500  text-night hover:scale-105 transform duration-200" />
        }
        title="Vite"
      />
      <IconCard
        dropShadowColor="#47474a"
        icon={
          <Cypress className="h-20 w-20 p-4 hover:text-cypress text-night hover:scale-105 transform duration-200" />
        }
        title="Cypress"
      />
       <IconCard
        dropShadowColor="#bf4080"
        icon={
          <Sass className="h-20 w-20 p-4 hover:text-pink-500 text-night hover:scale-105 transform duration-200" />
        }
        title="Sass"
      />
    </div>
    <div class="p-2 flex mb-8 ml-8">
      <IconCard
        dropShadowColor="#059669"
        icon={
          <Python className="h-20 w-20 p-5 hover:text-green-600 text-night hover:scale-105 transform duration-200" />
        }
        title="Python"
      />
       <IconCard
        dropShadowColor="#166534"
        icon={
          <Django className="h-20 w-20 p-5 hover:text-green-800 text-night hover:scale-105 transform duration-200" />
        }
        title="Django"
      />
        <IconCard
        dropShadowColor="#06b6d4"
        icon={
          <Mysql className="h-20 w-20 p-5 hover:text-cyan-900 text-night hover:scale-105 transform duration-200" />
        }
        title="MySQL"
      />
        <IconCard
        dropShadowColor="#155e75"
        icon={
          <Postgresql className="h-20 w-20 p-5 hover:text-cyan-700 text-night hover:scale-105 transform duration-200" />
        }
        title="PostgreSQL"
      />
      <IconCard
        dropShadowColor="#155e75"
        icon={
          <Redis className="h-20 w-20 p-5 hover:text-red-500 text-night hover:scale-105 transform duration-200" />
        }
        title="Redis"
      />
       <IconCard
        dropShadowColor="#155e75"
        icon={
          <Graphql className="h-20 w-20 p-5 hover:text-pink-500 text-night hover:scale-105 transform duration-200" />
        }
        title="Graphql"
      />
      
    </div>
    </>
  );
}
