// Importer Express et créer un routeur
const express = require('express');
const router = express.Router();

// Importer toutes les fonctions du contrôleur
const {
    getAllEtudiants,
    getEtudiantById,
    createEtudiant,
    updateEtudiant,
    deleteEtudiant,
    getEtudiantsByFiliere,
    searchEtudiants,
    getEtudiantsDesactives,
    desactivateEtudiant
} = require('../controllers/etudiantController');

// ============================================
// DÉFINITION DES ROUTES
// ============================================

// Route:  /api/etudiants
// GET  → Liste tous les étudiants
// POST → Crée un nouvel étudiant
router.route('/')
    .get(getAllEtudiants)
    .post(createEtudiant);

// ⚠️ IMPORTANT:  Cette route DOIT être avant /: id
// Sinon "filiere" serait interprété comme un ID
router.get('/filiere/:filiere', getEtudiantsByFiliere);
router.get('/search', searchEtudiants);
router.get('/desactives', getEtudiantsDesactives);


// Route: /api/etudiants/:id
// GET    → Récupère un étudiant par ID
// PUT    → Modifie un étudiant
// DELETE → Supprime un étudiant
router.route('/:id')
    .get(getEtudiantById)
    .put(updateEtudiant)
    .delete(deleteEtudiant)
    .delete(desactivateEtudiant);
router.delete('/desactives/:id', desactivateEtudiant);

// Exporter le routeur
module.exports = router;
