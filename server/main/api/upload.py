# # -*- coding: utf-8 -*-


from flask import Blueprint

from server.main.services.upload_service import UploadService

route = Blueprint('upload', __name__)

upload_service = UploadService()

@route.route("/api/uploads")
def test_upload_db():
    uploads = upload_service.all()
    return uploads