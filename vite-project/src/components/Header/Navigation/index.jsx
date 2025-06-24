import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "./style.css";
const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <div>
      <nav className="py-2">
        <div className="container flex items-center justify-end grap 8">
          <div className="col_1 w-[20%] ">
            <Button
              className="!text-black gap-2 w-full "
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>

          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full ">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Pents
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none ">
                <Link to="/" className="link transiton text-[16px] font-[500]">
                  <Button className="link transition text-[14px] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[15%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 my-0">
              <GoRocket className="text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* Category Panel component */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </div>
  );
};

export default Navigation;
