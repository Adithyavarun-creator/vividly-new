import React, { useState } from "react";
import "./Image.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Button from "../Button/Button";
import { CiCrop } from "react-icons/ci";
import { MdOutlineRotateRight } from "react-icons/md";
import { IoIosResize } from "react-icons/io";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { RiDeleteRow } from "react-icons/ri";
import { BsCamera } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { RiInformationFill, RiUpload2Line } from "react-icons/ri";
import ImageUploading from "react-images-uploading";
import { MdDriveFolderUpload } from "react-icons/md";

const Image = () => {
  const [crop, setCrop] = useState();
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  function getImageFileObject(imageFile) {
    // console.log({ imageFile });
  }

  function runAfterImageDelete(file) {
    // console.log({ file });
  }

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onDownload = () => {
    generateDownload(images, crop);
  };

  // const onDownload = () => {
  //   generateDownload(image, croppedArea);
  // };

  return (
    <div className="image-container">
      {/* <div className="image-functions">
        <div>
          <span className="flex edit-functions">
            <CiCrop />
            &nbsp;Crop image
          </span>
        </div>
        <div>
          <span className="flex edit-functions">
            <MdOutlineRotateRight />
            &nbsp;Rotate image
          </span>
        </div>
        <div>
          <span className="flex edit-functions">
            <IoIosResize />
            &nbsp;Resize image
          </span>
        </div>
      </div> */}

      <div className="uploadimage">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="image-container">
              <Button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                text="Browse image from system"
                icon={<MdDriveFolderUpload />}
              />

              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <span className="flex imageinfo">
                    <RiInformationFill />
                    Crop feature is auto enabled when you hover on image
                  </span>
                  <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                    <img className="img" src={image["data_url"]} alt="" />
                  </ReactCrop>

                  <div className="remove-btn">
                    <Button
                      onClick={onImageUpload}
                      text="Upload new image"
                      icon={<RiUpload2Line />}
                    />
                    <Button
                      text="Remove image"
                      icon={<MdDelete />}
                      onClick={() => onImageRemove(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};

export default Image;

/**
   <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <img
          src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=3775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
          }}
          className=""
        />
      </ReactCrop>
 */
