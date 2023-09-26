import React from "react";
import articleData from "../../data/articleData";

const Articles = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h1 className="section-title text-3xl font-bold mb-2">
              Articles <span class="title-icon">&#128466;</span>
            </h1>
            <p class="section-subtitle">
              I write articles on multiple platforms, this
              is a list of some of the articles I've written online.
            </p>
          </div>

          <div className="md:mb-4">
            <h2 className='text-base md:text-lg font-bold mt-4 mb-2 mr-2 md:mr-9'>All ({articleData.length})</h2>
            </div>
          <div className="article-container">
            {articleData.map((article) => (
              <div className="" key={article.id}>
            <div className="mt-4 md:mt-3 border-b-2 border-dashed border-gray-500 pb-3" >
              <h2 className="article-title text-lg font-semibold underline">
                <a href={article.site}>{article.title}</a>
              </h2>

              <div className="article-description">
                <p className="article-details text-lg text-gray-700 mt-1">{article.details}</p>
                <p className="article-date text-base text-gray-700 mt-2">{article.date.join(', ')}</p>
              </div>
            </div>
            </div>
            ))}
          </div>


        </div>
      </section>

      <div class="page-nav flex justify-between mb-6">
        <a href="projects" className="ml-6">
          &#8592; Projects
        </a>
      </div>
    </>
  );
};

export default Articles;
