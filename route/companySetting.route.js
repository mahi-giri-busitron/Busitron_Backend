import express from "express";
import {
    updateCompanySettings,
    createBusinessAddress,
    deleteBusinessAddress,
    getCompanySettings,
    updateBusinessAddress,
} from "../controller/companySetting.controller.js";

const router = express.Router();

router.get("/company_setting", getCompanySettings);

router.put("/update_company_setting", updateCompanySettings);

router.put("/create_business_address/:companyId", createBusinessAddress);

router.put("/update_business_address/:companyId/:id", updateBusinessAddress);

router.delete("/delete_business_address/:companyId/:id", deleteBusinessAddress);

export default router;
