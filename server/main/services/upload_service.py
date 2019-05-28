# -*- coding: utf-8 -*-
"""

uploadService class - This class holds the method related to User manipulations.

"""

from server.main.models.upload import Upload
from server.main.services import SQLAlchemyService


class UploadService(SQLAlchemyService):
    __model__ = Upload

    def __init__(self):
        # Creating a parent class ref to access parent class methods.
        self.parentClassRef = super(UploadService, self)

