'use client'
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import TextEditor from '../../../components/TextEditor';
import Sidebar from '../../../components/Sidebar';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Select from "react-select";
/* eslint-disable no-unused-vars */
import { fetchBlog } from '@/services/BlogServices';

import { blogs } from '@/utils/blogs';


const Blogdetails = ({ params }) => {
  const [blog, setBlog] = useState({})

  useEffect(() => {
    // const fetchData = async() => {
    //   const {bloques} = await fetchBlog(params.id);
    //   setBlog(bloques[0])
    // }
    // fetchData()
    setBlog(blogs[params.id])
  }, [])

  return (
    <div>
      <>
        <div className="main-wrapper">
          {/* <Header/> */}
          {/* <Sidebar id='menu-item11' id1='menu-items11' activeClassName='blog-details' /> */}
          <div className="page-wrapper" style={{ marginLeft: 'unset' }}>
            <div className="content">
              {/* Page Header */}
              {/* <div className="page-header">
                <div className="row">
                  <div className="col-12 col-lg-10">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="#">Blog </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <i className="feather-chevron-right">
                          <FeatherIcon icon="chevron-right" />
                        </i>
                      </li>
                      <li className="breadcrumb-item active">Vista Blog</li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* /Page Header */}
              <div className="row d-flex justify-content-center">

                {/* CONTENIDO DEL BLOG */}
                <div className="col-12 col-lg-10 col-xl-6">
                  <div className="blog-view">
                    <article className="blog blog-single-post">
                      <h3 className="blog-title">
                        {blog.titulo}
                      </h3>
                      <div className="blog-info clearfix">
                        <div className="post-left date-blks">
                          <ul>
                            <li>
                              <Link href="#">
                                <i className="feather-calendar" >
                                  <FeatherIcon icon="calendar" />
                                  {" "}
                                </i>
                                <span>05 Jul 2022</span>
                              </Link>
                            </li>
                            {/*  <li>
                              <Link href="#">
                                <i className="feather-message" >
                                  <FeatherIcon icon="message-square" />
                                  {" "}
                                </i>
                                <span>58</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="feather-eye" >
                                  <FeatherIcon icon="eye" />
                                </i>
                                <span>2.8k</span>
                              </Link>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                      <div className="blog-image">
                        <Link href="#.">
                          <img
                            alt="#"
                            src={blog.imagen}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.texto }}>
                        {/* {blog.texto} */}
                      </div>
                      {/* <div className="blog-share ">
                        <ul className="social-share nav">
                          <li>
                            <Link href="#">
                              <img alt="#" src={social01.src} />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <img alt="#" src={social02.src} />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <img alt="#" src={social03.src} />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <img alt="#" src={social04.src} />
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                      <div className="list-add-blogs">
                        <ul className="nav">

                          <li># Ophthalmology</li>
                          <li># Beauty</li>
                          <li># Prevention</li>
                        </ul>
                      </div>
                    </article>
                    {/* <div className="widget author-widget ">
                <div className="authr-blog-group text-center">
                  <div className="authr-blg-img mb-2">
                    <img
                      className="avatar"
                     alt="#"
                      src={profiles03.src}
                    />
                  </div>
                  <h2>Markhay smith</h2>
                  <span>Dentist</span>
                  <p>
                    {" "}
                    Integer enim neque volutpat ac tincidunt vitae semper quis.
                    Orci sagittis eu volutpat odio facilisis mauris sit. Sed
                    risus ultricies tristique nulla aliquet enim tortor at
                    auctor.{" "}
                  </p>
                  <ul className="nav social-blk">
                    <li>
                      <Link href="#">
                        <img alt="#" src={iconsocial.src} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img alt="#" src={iconsocial02.src} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img alt="#" src={iconsocial03.src} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <img alt="#" src={iconsocial04.src} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
                    {/* <div className="widget blog-comments clearfix">
                <h3>Comments</h3>
                <ul className="comments-list">
                  <li>
                    <div className="comment">
                      <div className="comment-author">
                        <Link href="#">
                          <img
                            className="avatar"
                           alt="#"
                            src={profileavatar03.src}
                          />
                        </Link>
                      </div>
                      <div className="comment-block">
                        <div className="comment-by">
                          <div className="week-group">
                            <h5 className="blog-author-name">Diana Bailey</h5>
                            <span className="week-list">2 Weeks ago</span>
                          </div>
                          <span className="float-end">
                            <span className="blog-reply">
                              <Link href="#.">
                                <i className="fa fa-reply" /> Reply
                              </Link>
                            </span>
                          </span>
                        </div>
                        <p>
                          Integer enim neque volutpat ac tincidunt vitae semper
                          quis. Orci sagittis eu volutpat odio facilisis mauris
                          sit. Sed risus ultricies tristique nulla aliquet enim
                          tortor at auctor.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comment">
                      <div className="comment-author">
                        <Link href="#">
                          <img
                            className="avatar"
                           alt="#"
                            src={profileavatar04.src}
                          />
                        </Link>
                      </div>
                      <div className="comment-block">
                        <div className="comment-by">
                          <div className="week-group">
                            <h5 className="blog-author-name">Diana Bailey</h5>
                            <span className="week-list">2 Weeks ago</span>
                          </div>
                          <span className="float-end">
                            <span className="blog-reply">
                              <Link href="#.">
                                <i className="fa fa-reply" /> Reply
                              </Link>
                            </span>
                          </span>
                        </div>
                        <p>
                          Integer enim neque volutpat ac tincidunt vitae semper
                          quis. Orci sagittis eu volutpat odio facilisis mauris
                          sit. Sed risus ultricies tristique nulla aliquet enim
                          tortor at auctor.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comment">
                      <div className="comment-author">
                        <Link href="#">
                          <img
                            className="avatar"
                           alt="#"
                            src={profileavatar05.src}
                          />
                        </Link>
                      </div>
                      <div className="comment-block">
                        <div className="comment-by">
                          <div className="week-group">
                            <h5 className="blog-author-name">Diana Bailey</h5>
                            <span className="week-list">2 Weeks ago</span>
                          </div>
                          <span className="float-end">
                            <span className="blog-reply">
                              <Link href="#.">
                                <i className="fa fa-reply" /> Reply
                              </Link>
                            </span>
                          </span>
                        </div>
                        <p>
                          Integer enim neque volutpat ac tincidunt vitae semper
                          quis. Orci sagittis eu volutpat odio facilisis mauris
                          sit. Sed risus ultricies tristique nulla aliquet enim
                          tortor at auctor.{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
                  </div>
                </div>

                {/*  <Link className="col-md-4" href="#">
                  <div className="widget post-widget">
                    <div className="relat-head">
                      <h5>Related Posts</h5>
                      <Link href="#">Show All</Link>
                    </div>
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog7.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Health</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Hydration or Moisturization – What to do this Winter?
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 10 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog08.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Ophthalmology</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Keep proper monitor distance and room lighting.
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 5 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog09.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Safety</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Keep Hand Sanitizers Away from Young Children
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 4 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog10.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Ophthalmology</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Hair Loss – Causes, Treatment and Preventions
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 10 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget tags-widget">
                    <div className="relat-head">
                      <h5>Tags</h5>
                    </div>
                    <ul className="tags">
                      <li>
                        <Link href="#." className="tag">
                          # Endodontics (10)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Endodontics (15)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Neurology (70)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Insurance (16)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Dental (60)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Neurology (70)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Diabetes (10)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Dermotology (15)
                        </Link>
                      </li>
                      <li>
                        <Link href="#." className="tag">
                          # Stress (25)
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget post-widget">
                    <div className="relat-head">
                      <h5>Most Reads</h5>
                      <Link href="#">Show All</Link>
                    </div>
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog11.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Health</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Hydration or Moisturization – What to do this Winter?
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 10 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog12.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Ophthalmology</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Hair Loss – Causes, Treatment and Preventions
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 5 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link href="#">
                            <img
                              className="img-fluid"
                              src={blog13.src}
                              alt="#"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <div className="date-posts">
                            <h5>Safety</h5>
                            <span className="ms-2">05 Sep 2022</span>
                          </div>
                          <h4>
                            <Link href="#">
                              Simple Changes That Lowered My Mom Blood Pressure
                            </Link>
                          </h4>
                          <p>
                            {" "}
                            Read more in 4 Minutes
                            <i className="fa fa-long-arrow-right ms-2" />
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget category-widget">
                    <div className="relat-head mb-0">
                      <h5> Categories</h5>
                    </div>
                    <ul className="categories">
                      <li>
                        <Link href="#.">
                          <img
                            src={tag.src}
                            className="me-1"
                            alt="#"
                          />
                          Hydration or Moisturization (10)
                        </Link>
                      </li>
                      <li>
                        <Link href="#.">
                          <img
                            src={tag1.src}
                            className="me-1"
                            alt="#"
                          />
                          Ophthalmology (50)
                        </Link>
                      </li>
                      <li>
                        <Link href="#.">
                          <img
                            src={tag2.src}
                            className="me-1"
                            alt="#"
                          />
                          Blood Pressure (24)
                        </Link>
                      </li>
                      <li>
                        <Link href="#.">
                          <img
                            src={tag3.src}
                            className="me-1"
                            alt="#"
                          />
                          Corona Virus (32)
                        </Link>
                      </li>
                      <li>
                        <Link href="#.">
                          <img
                            src={tag4.src}
                            className="me-1"
                            alt="#"
                          />
                          Dental (15)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Link> */}
                {/* <div className="col-md-12">
            <div className="widget new-comment clearfix">
              <h3>Leave a Comment</h3>
              <form>
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>
                        Name <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>
                        Email<span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="form-group local-forms">
                      <label>
                        Comments <span className="login-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        cols={30}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="remember-me">
                      <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        {" "}
                        Save my name, email, and website in this browser for the
                        next time I comment.
                        <input type="checkbox" name="radio" defaultChecked="" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-form me-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-overlay" data-reff="" />
      </>

    </div>
  )
}

export default Blogdetails
