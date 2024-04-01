import React from 'react';
import DashboardHeader from '../../../components/SectionHeader/DashboardHeader';

const AddProduct = () => {
    return (
      <div>
        <DashboardHeader title={"Add Product"} />
        <div className="my-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="class_name" className="add-class-label">
                  Course name
                </label>
                <input
                  type="text"
                  id="class_name"
                  className="add-class-input-field"
                  placeholder="Course Name"
                  {...register("course_name", { required: true })}
                />
                {errors.course_name && (
                  <span className="text-sm text-amber-500">
                    Name is required *
                  </span>
                )}
              </div>
              <div>
                <label className="add-class-label" htmlFor="file_input">
                  Upload Image
                </label>
                <input
                  className="add-class-input-field p-[7px]"
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-sm text-amber-500">
                    Please upload an image *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="user_name" className="add-class-label">
                  Instructor Name
                </label>
                <input
                  type="text"
                  id="instructor_name"
                  className="add-class-input-field"
                  value={user.displayName}
                  {...register("instructor_name", { required: true })}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email" className="add-class-label">
                  Instructor Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="add-class-input-field"
                  readOnly
                  value={user.email}
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="seats" className="add-class-label">
                  Available Seats
                </label>
                <input
                  type="number"
                  id="seats"
                  className="add-class-input-field"
                  placeholder="Available Seats"
                  {...register("seats", { required: true })}
                />
                {errors.seats && (
                  <span className="text-sm text-amber-500">
                    Please write available seats *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="price" className="add-class-label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="add-class-input-field"
                  placeholder="Price $"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-sm text-amber-500">
                    Please write course price *
                  </span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="add-class-label">
                Description
              </label>
              <textarea
                id="description"
                className="add-class-input-field"
                placeholder="Write Class Description..."
                rows="2"
                {...register("description", { required: false })}
              />
            </div>
            <button
              type="submit"
              className="btn custom-btn text-white bg-amber-500 hover:bg-amber-600 w-full"
            >
              {loading ? (
                <ImSpinner9 className="m-auto animate-spin" size={24} />
              ) : (
                "Add Course"
              )}
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddProduct;