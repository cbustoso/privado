import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="col-12 col-sm-6">
        <div className="form-group local-forms">
          <label>
            Nombres y apellidos <span className="login-danger">*</span>
          </label>
          <input
            className="form-control" type="text"
            defaultValue={""}
            {...register('address')} />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="form-group local-forms">
          <label>
            Parentesco <span className="login-danger">*</span>
          </label>
          <input
            className="form-control" type="text"
            defaultValue={""}
            {...register('address')} />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="form-group local-forms">
          <label>
            Fono domicilio <span className="login-danger">*</span>
          </label>
          <input
            className="form-control" type="tel"
            defaultValue={""}
            {...register('address')} />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="form-group local-forms">
          <label>
            Celular <span className="login-danger">*</span>
          </label>
          <input
            className="form-control" type="tel"
            defaultValue={""}
            placeholder="+56"
            {...register('address')} />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="form-group local-forms">
          <label>
            Correo electrónico <span className="login-danger">*</span>
          </label>
          <input
            className="form-control" type="text"
            defaultValue={""}
            {...register('address')} />
        </div>
      </div>
    </>
  )
}

export default Contact