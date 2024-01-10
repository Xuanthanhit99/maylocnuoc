"use client";
import { Breadcrumb, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function page(props: any) {
  console.log("first", props?.params.slug);

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <HomeOutlined />,
            },
            {
              href: "/product",
              title: (
                <>
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: props?.params.slug,
            },
          ]}
        />
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row p-0" span={9}>
              <div>
                <div className="mb-3">
                    <img alt="example" src="/image/product/may-loc-nuoc-kangaroo.png"/>
                </div>
                <div>
                  <Slide slidesToScroll={2} slidesToShow={3}>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        border: "1px solid #dfdfdf",
                        margin: "0 4px"
                      }}
                    >
                      <img alt="example" src="/image/product/may-loc-nuoc-kangaroo.png"/>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        border: "1px solid #dfdfdf",
                        margin: "0 4px"
                      }}
                    >
                      <img alt="example" src="/image/product/may-loc-nuoc-kangaroo.png"/>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        border: "1px solid #dfdfdf",
                        margin: "0 4px"
                      }}
                    >
                      <img alt="example" src="/image/product/may-loc-nuoc-kangaroo.png"/>
                    </div>
                  </Slide>
                </div>
              </div>
            </Col>
            <Col className="gutter-row p-0" span={15}>
              <div>col-6</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
