import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

import classNames from "./classnames";
import { PostTagDead } from "./postTag";

// Temporary

export type ProjectProps = {
  title: string;
  href: string;
  slug: string;
  desc: string;
  client?: string;
  date?: string;
  published?: boolean;
  tags: string;
};

type ProjectListProps = {
  children?: React.ReactNode;
  projects: Array<ProjectProps>;
};

const ProjectList = (props: ProjectListProps) => {
  const items = props.projects ? props.projects : [];

  const router = useRouter();
  const category = router.query.category;
  console.log(category);

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">
              See a list of projects I&apos;ve done.
            </p>
          </div>
        </div>
        <div className="mt-3 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {!category
            ? items.map((item) =>
                // NOTE Beware of ts-ignore directive
                // @ts-ignore
                (item.published as unknown as boolean) ? (
                  <div key={item.title}>
                    <p className="text-sm text-gray-500">
                      <time dateTime={item.date}>{item.date}</time>
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {/* NOTE Beware of this @ts-ignore directive */}
                      {/* @ts-ignore */}
                      {item?.desc}
                    </p>
                    {item.tags ? (
                      item.tags
                        .split("-")
                        .map((tag) => <PostTagDead key={tag} tagName={tag} />)
                    ) : (
                      <></>
                    )}

                    <div className="mt-3">
                      {/* NOTE Beware of this @ts-ignore directive */}
                      {/* @ts-ignore */}
                      <NextLink href={`/projects/${item.slug}`} passHref>
                        <a className="text-base font-semibold text-brand-accent1 hover:text-brand-accent1h">
                          Read full story
                        </a>
                      </NextLink>
                    </div>
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
